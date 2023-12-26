type CharacterStatus = "Dead" | "Alive" | "unknown";
type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

interface CharacterLocation {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  url: string;
  created: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

interface PaginatedResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

export {
  Character,
  CharacterStatus,
  CharacterGender,
  CharacterLocation,
  PaginatedResponse,
};
