export interface IPokemonType {
  name: string;
  url: string;
  names?: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}
