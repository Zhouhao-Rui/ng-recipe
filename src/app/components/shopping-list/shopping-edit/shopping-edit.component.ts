import { Component, ElementRef, OnInit, ViewChild, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { ShoppingListService } from "src/app/services/shopping-list.service";
import { Ingredient } from "src/app/shared_model/ingredient.model";
import { AddIngredient } from "../store/shopping-list.action";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") input_name: ElementRef;
  @ViewChild("amountInput") input_amount: ElementRef;
  @Input() ingredients: Array<Ingredient>;
  constructor(
    private shoppingListSerice: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit(): void {}

  addIngredients() {
    let ingredient = new Ingredient(
      this.input_name.nativeElement.value,
      parseFloat(this.input_amount.nativeElement.value)
    );
    this.shoppingListSerice.addIngredientEmitter.emit(ingredient);
    // try dispatch action
    this.store.dispatch(new AddIngredient(ingredient));
  }

  deleteIngredients() {
    this.shoppingListSerice.deleteIngredientEmitter.emit(
      this.input_name.nativeElement.value
    );
  }

  reset() {
    this.input_name.nativeElement.value = "";
    this.input_amount.nativeElement.value = "";
  }
}
