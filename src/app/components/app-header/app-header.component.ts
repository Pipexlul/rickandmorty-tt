import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, Router } from "@angular/router";

@Component({
  selector: "app-app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./app-header.component.html",
  styleUrl: "./app-header.component.css",
})
export class AppHeaderComponent {
  constructor(private router: Router) {}

  get isInHomePage(): boolean {
    return this.router.url === "/";
  }

  isBurgerOpen: boolean = false;
}
