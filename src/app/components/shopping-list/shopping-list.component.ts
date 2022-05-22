import { Component, OnInit } from "@angular/core";
import { ShoppingListService } from "src/app/services/shopping-list.service";
import { Ingredient } from "src/app/shared_model/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [];
  ingredients_names: string[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    //binding data
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredients_names = this.shoppingListService.getIngredientNames();

    //event emitter
    this.shoppingListService.addIngredientEmitter.subscribe(
      (ingrident: Ingredient) => {
        // update central data
        this.shoppingListService.addIngredient(ingrident);
        // update local data
        this.ingredients = this.shoppingListService.getIngredients();
      }
    );

    this.shoppingListService.deleteIngredientEmitter.subscribe(
      (name: string) => {
        // update central data
        this.shoppingListService.deleteIngredient(name);
        // update local data
        this.ingredients_names = this.shoppingListService.getIngredientNames();
      }
    );
  }
}
