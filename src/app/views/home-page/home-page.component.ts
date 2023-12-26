import { Component } from "@angular/core";

import { CardListComponent } from "../../components/card-list/card-list.component";
import { CardDTO } from "../../interfaces/card.interface";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [CardListComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {
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
