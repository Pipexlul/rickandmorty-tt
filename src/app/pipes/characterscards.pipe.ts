import { Pipe, PipeTransform } from "@angular/core";
import { Character } from "../interfaces/apiResponse.interface";
import { CardDTO } from "../interfaces/card.interface";

@Pipe({
  name: "characterscards",
  standalone: true,
})
class CharactersCardPipe implements PipeTransform {
  transform(value: Character[] | null): CardDTO[] {
    if (value === null) {
      return [];
    }

    return value.map((character) => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
        gender: character.gender,
        species: character.species,
        status: character.status,
      };
    });
  }
}

export { CharactersCardPipe };
