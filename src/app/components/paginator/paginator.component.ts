import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-paginator",
  standalone: true,
  imports: [],
  templateUrl: "./paginator.component.html",
  styleUrl: "./paginator.component.css",
})
export class PaginatorComponent {
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  @Input({ required: true }) items: unknown[] = [];

  @Output() pageChanged = new EventEmitter<number>();

  get totalItems(): number {
    return this.items.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage || 1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    if (page === this.currentPage) {
      return;
    }

    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }

  goToPreviousPage(): void {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
  }

  goToNextPage(): void {
    if (this.currentPage === this.totalPages) {
      return;
    }

    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
  }
}
