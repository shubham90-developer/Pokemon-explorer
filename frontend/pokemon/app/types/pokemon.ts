export interface Stats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface Pokemon {
  _id: string;
  title: string;
  image: string;
  description: string;
  types: string[];
  abilities: string[];
  stats: Stats;
  moves: string[];
}
