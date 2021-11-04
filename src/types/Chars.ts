export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
}

interface Info {
  count: string;
  pages: string;
  next: string;
  prev: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  location: Location;
  image: string;
}

export interface CharType {
  characters: {
    results: Character[];
    info: Info;
  },
  character: Character;
}
