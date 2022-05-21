import { Component, OnInit } from "@angular/core";
import { Ingredient } from "src/app/shared_model/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [];
  ingredients_names: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  onAddIngredient(ingrident: Ingredient) {
    // judge if the ingredient exist in list
    if (!this.ingredients_names.includes(ingrident.name)) {
      this.ingredients.push(ingrident);
      this.ingredients_names.push(ingrident.name);
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

  onDeleteIngredient(name: string) {
    this.ingredients = this.ingredients.filter((value, index) => {
      return value.name != name;
    });
    this.ingredients_names = this.ingredients_names.filter((value, index) => {
      return value != name;
    });
    console.log(this.ingredients);
    console.log(this.ingredients_names);
  }
}
