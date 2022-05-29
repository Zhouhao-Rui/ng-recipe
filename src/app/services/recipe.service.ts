import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../components/recipes/recipe.model";
import { Ingredient } from "../shared_model/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  constructor(private shoppingListService: ShoppingListService) {}
  private recipes: Array<Recipe> = [
    new Recipe(
      "A test",
      "This is a simple test",
      "https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg",
      [new Ingredient("Meat", 1), new Ingredient("Fries", 1)]
    ),
    new Recipe(
      "A new Test",
      "This is a simple test",
      "https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg",
      [new Ingredient("Crisp", 1), new Ingredient("Salmon", 2)]
    )
  ];

  getRecipe() {
    // copy of the recipe array
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    console.log("aaa");
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
