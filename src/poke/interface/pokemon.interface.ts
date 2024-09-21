import { IPokemonType } from './type.interface';

export interface IPokemon {
  name: string;
  url?: string;
  types?: {
    slot: number;
    type: IPokemonType;
  }[];
}
