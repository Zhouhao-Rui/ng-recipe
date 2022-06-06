import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/recipe"
  },
  {
    path: "recipe",
    loadChildren: () =>
      import("./components/recipes/recipe.module").then((m) => m.RecipeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
