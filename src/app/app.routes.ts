import { Routes } from "@angular/router";

import { HomePageComponent } from "./views/home-page/home-page.component";
import { DetailsPageComponent } from "./views/details-page/details-page.component";

export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "details/:id",
    component: DetailsPageComponent,
  },
];
