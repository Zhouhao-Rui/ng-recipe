import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "src/app/shared_model/shared.module";
@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RecipeRoutingModule,
    SharedModule
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent
  ]
})
export class RecipeModule {}
