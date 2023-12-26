import { Component } from "@angular/core";

import { CardListComponent } from "../../components/card-list/card-list.component";
import { CardDTO } from "../../interfaces/card.interface";
import { RickAndMortyService } from "../../services/rick-and-morty.service";
import { Observable } from "rxjs";
import { Character } from "../../interfaces/apiResponse.interface";
import { AsyncPipe } from "@angular/common";
import { CharactersCardPipe } from "../../pipes/characterscards.pipe";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [CardListComponent, AsyncPipe, CharactersCardPipe],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {
  constructor(private rickAndMorty: RickAndMortyService) {
    this.characterData$ = this.rickAndMorty.getCharacters();
  }

  characterData$: Observable<Character[]>;

  testArray: CardDTO[] = Array.from({ length: 100 }, (_, i) => {
    return {
      id: i,
      name: `tEst lol ${i}`,
      gender: Math.random() <= 0.5 ? "Male" : "Female",
      image: "",
      status: Math.random() <= 0.5 ? "Alive" : "Dead",
      species: Math.random() <= 0.5 ? "Human" : "Alien",
    };
  });
}
