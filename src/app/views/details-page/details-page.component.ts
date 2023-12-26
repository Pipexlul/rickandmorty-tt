import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Character } from "../../interfaces/apiResponse.interface";
import { Observable } from "rxjs";
import { RickAndMortyService } from "../../services/rick-and-morty.service";
import { AsyncPipe, CommonModule } from "@angular/common";
import { FullCardComponent } from "../../components/full-card/full-card.component";

@Component({
  selector: "app-details-page",
  standalone: true,
  imports: [AsyncPipe, CommonModule, FullCardComponent],
  templateUrl: "./details-page.component.html",
  styleUrl: "./details-page.component.css",
})
export class DetailsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private rickAndMorty: RickAndMortyService,
  ) {}

  charId: string | null = "-1";
  characterData$: Observable<Character> | null = null;
  invalidId: boolean = false;

  ngOnInit(): void {
    this.charId = this.route.snapshot.paramMap.get("id");

    const numId = parseInt(this.charId ?? "-1");

    if (isNaN(numId) || numId === -1) {
      this.invalidId = true;
      return;
    }

    this.characterData$ = this.rickAndMorty.getCharacter(numId);
  }
}
