import { Controller, Get, Param, Query } from '@nestjs/common';
import { IPokemon } from 'src/poke/interface/pokemon.interface';
import { PokemonService } from 'src/poke/service/poke/poke.service';

@Controller('')
export class PokeController {
  constructor(private readonly pokeService: PokemonService) {}

  @Get('pokemon')
  async getPaginatePokemons(
    @Query('limit') limit: string = '100',
    @Query('offset') offset: string = '0',
  ): Promise<{
    results: IPokemon[];
  }> {
    const pokemonList = await this.pokeService.getAllPokemon(+limit, +offset);
    return {
      results: pokemonList,
    };
  }

  @Get('pokemon/:id')
  async getPokemon(@Param('id') id: string): Promise<IPokemon> {
    const { name, types } = await this.pokeService.getPokemon(id);

    return {
      name,
      types,
    };
  }

  @Get('pokemonAndTypes/:id')
  async getPokemonAndTypes(@Param('id') id: string): Promise<IPokemon> {
    const pokemon = await this.pokeService.getPokemon(id);

    const languages = ['es', 'ja'];
    await this.pokeService.translateTypes(pokemon, languages);

    return {
      name: pokemon.name,
      types: pokemon.types,
    };
  }
}
