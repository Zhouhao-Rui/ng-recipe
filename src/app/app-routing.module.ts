import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { RecipeDetailComponent } from "./components/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./components/recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./components/recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipeResolverService } from "./components/recipes/recipe_resolver.service";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/recipe"
  },
  {
    path: "recipe",
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: RecipeStartComponent
      },
      {
        path: "detail/:id/edit",
        component: RecipeEditComponent
      },
      {
        path: "detail/:id",
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService]
      },
      {
        path: "new",
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: "shoppinglist",
    component: ShoppingListComponent
  },
  {
    path: "auth",
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
