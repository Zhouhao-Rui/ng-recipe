import { EventEmitter } from "@angular/core";
import { Recipe } from "../components/recipes/recipe.model";
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Array<Recipe> = [
    new Recipe(
      "A test",
      "This is a simple test",
      "https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg"
    )
  ];

  getRecipe() {
    // copy of the recipe array
    return this.recipes.slice();
  }
}
