import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "src/app/shared_model/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") input_name: ElementRef;
  @ViewChild("amountInput") input_amount: ElementRef;
  @Input() ingredients: Array<Ingredient>;
  @Output() ingredientAddEmitter: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();
  @Output() ingredientDeleteEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addIngredients() {
    let ingredient = new Ingredient(
      this.input_name.nativeElement.value,
      parseFloat(this.input_amount.nativeElement.value)
    );
    this.ingredientAddEmitter.emit(ingredient);
  }

  deleteIngredients() {
    this.ingredientDeleteEmitter.emit(this.input_name.nativeElement.value);
  }

  reset() {
    this.input_name.nativeElement.value = "";
    this.input_amount.nativeElement.value = "";
  }
}
