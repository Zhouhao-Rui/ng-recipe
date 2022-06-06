import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared_model/shared.module";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    RouterModule.forChild([
      {
        path: "shoppinglist",
        component: ShoppingListComponent
      }
    ]),
    SharedModule,
    FormsModule
  ]
})
export class ShoppingListModule {}
