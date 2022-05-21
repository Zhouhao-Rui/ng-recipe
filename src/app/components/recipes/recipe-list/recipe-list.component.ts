import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeEmitter = new EventEmitter<Recipe>();
  recipes: Array<Recipe> = [
    new Recipe(
      "A test",
      "This is a simple test",
      "https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg"
    )
  ];
  constructor() {}

  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.recipeEmitter.emit(recipe);
  }
}
