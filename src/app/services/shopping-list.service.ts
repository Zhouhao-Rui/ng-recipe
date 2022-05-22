import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared_model/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  private ingredient_names: string[] = [];

  addIngredientEmitter: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();
  deleteIngredientEmitter: EventEmitter<string> = new EventEmitter<string>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientNames() {
    return this.ingredient_names.slice();
  }

  addIngredient(ingrident: Ingredient) {
    if (!this.ingredient_names.includes(ingrident.name)) {
      this.ingredients.push(ingrident);
      this.ingredient_names.push(ingrident.name);
    } else {
      // update
      this.ingredients = this.ingredients.map((value, index) => {
        if (value.name === ingrident.name) {
          value.amount += ingrident.amount;
        }
        return value;
      });
    }
    console.log(this.ingredients);
  }

  deleteIngredient(name: string) {
    this.ingredients = this.ingredients.filter((value, index) => {
      return value.name != name;
    });
    this.ingredient_names = this.ingredient_names.filter((value, index) => {
      return value != name;
    });
    console.log(this.ingredients);
    console.log(this.ingredient_names);
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    console.log("aaa");
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
    console.log(this);
  }
}
