import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipeListComponent } from "./components/recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./components/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./components/recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./components/shopping-list/shopping-edit/shopping-edit.component";
// to allow use in all files in the application
import { ShoppingListService } from "./services/shopping-list.service";
import { DropdownDirective } from "./directives/dropdown.directive";
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
