import { Component, OnInit } from "@angular/core";
import { Ingredient } from "src/app/shared_model/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [
    new Ingredient("Apples", 5),
    new Ingredient("Pepper", 3),
    new Ingredient("Onion", 2)
  ];
  constructor() {}

  ngOnInit(): void {}
}
