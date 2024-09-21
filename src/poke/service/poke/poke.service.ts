import { Injectable } from '@nestjs/common';
import { IPokemon } from 'src/poke/interface/pokemon.interface';
import { PokemonRepository } from 'src/poke/repository/poke/poke.repository';
import { UtilService } from 'src/util/util';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  public async getAllPokemon(limit: number, offset: number) {
    return await this.pokemonRepository.getAllPokemon(limit, offset);
  }

  public async getPokemon(id: string) {
    return await this.pokemonRepository.getPokemon(id);
  }

  public async translateTypes(
    pokemon: IPokemon,
    languages: string[] = [],
  ): Promise<void> {
    for (const contextType of pokemon.types) {
      const type = contextType.type;

      const id = UtilService.getLastSegment(type.url);
      if (!id) continue;

      const { names } = await this.pokemonRepository.getType(id);

      type.names =
        languages.length == 0
          ? names
          : names.filter((n) => languages.includes(n.language.name));
    }
  }
}
