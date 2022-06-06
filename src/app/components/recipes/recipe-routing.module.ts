import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeResolverService } from "./recipe_resolver.service";

const routes: Routes = [
  {
    path: "",
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
