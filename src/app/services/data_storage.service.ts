import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../components/recipes/recipe.model";
import { RecipeService } from "./recipe.service";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipe();

    this.http
      .put(
        "https://ng-client-test-4ffa6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
        recipes
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        "https://ng-client-test-4ffa6-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap((res) => this.recipeService.setRecipes(res))
      );
  }
}
