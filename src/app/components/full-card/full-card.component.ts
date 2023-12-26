import { Component, Input } from "@angular/core";
import { Character } from "../../interfaces/apiResponse.interface";
import { CapitalizePipe } from "../../pipes/capitalize.pipe";
import { NgOptimizedImage } from "@angular/common";

const _statusColors: Record<Character["status"], string> = {
  Alive: "bg-slate-200",
  Dead: "bg-black",
  unknown: "bg-slate-500",
};

@Component({
  selector: "app-full-card",
  standalone: true,
  imports: [CapitalizePipe, NgOptimizedImage],
  templateUrl: "./full-card.component.html",
  styleUrl: "./full-card.component.css",
})
export class FullCardComponent {
  @Input({ required: true }) characterData: Character = {
    id: -1,
    name: "",
    status: "unknown",
    species: "",
    type: "",
    gender: "unknown",
    origin: {
      name: "Unknown",
      url: "",
    },
    location: {
      name: "Unknown",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  };

  get isAlive(): boolean {
    return this.characterData.status === "Alive";
  }

  get statusColor(): string {
    return _statusColors[this.characterData?.status ?? "unknown"];
  }
}
