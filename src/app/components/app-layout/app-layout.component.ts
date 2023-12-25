import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { NzLayoutModule } from "ng-zorro-antd/layout";

@Component({
  selector: "app-app-layout",
  standalone: true,
  imports: [RouterOutlet, NzLayoutModule],
  templateUrl: "./app-layout.component.html",
  styleUrl: "./app-layout.component.css",
})
export class AppLayoutComponent {}
