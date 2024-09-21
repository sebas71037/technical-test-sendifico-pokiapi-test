import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IPokeResponse } from 'src/poke/interface/poke-response.interface';
import { IPokemon } from 'src/poke/interface/pokemon.interface';
import { IPokemonType } from 'src/poke/interface/type.interface';

@Injectable()
export class PokemonRepository {
  private readonly API: string = `https://pokeapi.co/api/v2/`;

  constructor(private readonly httpService: HttpService) {}

  public async getAllPokemon(limit: number, offset: number) {
    const response = await firstValueFrom(
      this.httpService.get<IPokeResponse<IPokemon>>(
        `${this.API}/pokemon?limit=${limit}&offset=${offset}`,
      ),
    );
    return response.data?.results ?? [];
  }

  public async getPokemon(id: string) {
    const response = await firstValueFrom(
      this.httpService.get<IPokemon>(`${this.API}/pokemon/${id}`),
    );
    return response.data;
  }

  public async getType(id: string) {
    const response = await firstValueFrom(
      this.httpService.get<IPokemonType>(`${this.API}/type/${id}`),
    );
    return response.data;
  }
}
