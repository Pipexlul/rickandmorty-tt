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

export { Character, CharacterStatus, CharacterGender, CharacterLocation };
