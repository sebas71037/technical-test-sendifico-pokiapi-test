export interface IPokeResponse<T> {
  count: number;
  next: string;
  previous?: string;
  results: T[];
}
