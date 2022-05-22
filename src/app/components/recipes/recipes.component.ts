import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RecipeService } from "src/app/services/recipe.service";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
      this.router.navigate(
        ["/recipe/detail", "name", this.selectedRecipe.name],
        {
          state: {
            recipe
          }
        }
      );
    });
  }
}
