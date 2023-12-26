import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppLayoutComponent } from "./components/app-layout/app-layout.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, AppLayoutComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "rickandmorty-tt";
}
