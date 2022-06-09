import { Ingredient } from "src/app/shared_model/ingredient.model";
import {
  AddIngredient,
  AddIngredients,
  ADD_INGREDIENT,
  ADD_INGREDIENTS,
  ShoppingListActions
} from "./shopping-list.action";

const initialState = {
  ingredients: [new Ingredient("Apple", 5), new Ingredient("Pear", 10)]
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions
) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, (action as AddIngredient).payload]
      };
    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...(action as AddIngredients).payload
        ]
      };
    default:
      return state;
  }
}
