import * as shoppinglistReducer from "../components/shopping-list/store/shopping-list.reducer";
import * as authReducer from "../components/auth/store/auth.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  shoppingList: shoppinglistReducer.State;
  auth: authReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: shoppinglistReducer.shoppingListReducer,
  auth: authReducer.authReducer
};
