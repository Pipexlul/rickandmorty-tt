import { Component, Input } from "@angular/core";

import { CardDTO } from "../../interfaces/card.interface";

import { CapitalizePipe } from "../../pipes/capitalize.pipe";
import { NgOptimizedImage } from "@angular/common";

const _statusColors: Record<CardDTO["status"], string> = {
  Alive: "bg-slate-200",
  Dead: "bg-black",
  unknown: "bg-slate-500",
};

@Component({
  selector: "app-card",
  standalone: true,
  imports: [CapitalizePipe, NgOptimizedImage],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  @Input({ required: true }) cardData: CardDTO = {
    id: -1,
    name: "",
    image: "",
    status: "unknown",
    gender: "unknown",
    species: "unknown",
  };

  get isAlive(): boolean {
    return this.cardData.status === "Alive";
  }

  get statusColor(): string {
    return _statusColors[this.cardData.status];
  }
}
