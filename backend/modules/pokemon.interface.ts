export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface IPokemon {
  image: string;
  title: string;
  description: string;
  types: string[];
  abilities: string[];
  stats: IStats;
  moves: string[];
}

export type ICreatePokemon = IPokemon;
export type IUpdatePokemon = Partial<IPokemon>;
