import { Component, Input } from "@angular/core";

import { CardComponent } from "../card/card.component";
import { PaginatorComponent } from "../paginator/paginator.component";

import { CardDTO } from "../../interfaces/card.interface";

@Component({
  selector: "app-card-list",
  standalone: true,
  imports: [CardComponent, PaginatorComponent],
  templateUrl: "./card-list.component.html",
  styleUrl: "./card-list.component.css",
})
export class CardListComponent {
  @Input({ required: true }) cards: CardDTO[] = [];
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;

  get paginatedCards(): CardDTO[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return this.cards.slice(startIndex, endIndex);
  }

  updatePage(page: number): void {
    this.currentPage = page;
  }
}
