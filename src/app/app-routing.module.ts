import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/recipe"
  },
  {
    path: "shoppinglist",
    component: ShoppingListComponent
  },
  {
    path: "auth",
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
