import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipeListComponent } from "./components/recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./components/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./components/recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./components/shopping-list/shopping-edit/shopping-edit.component";
// to allow use in all files in the application
import { ShoppingListService } from "./services/shopping-list.service";
import { DropdownDirective } from "./directives/dropdown.directive";
import { RecipeEditComponent } from "./components/recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./components/recipes/recipe-start/recipe-start.component";
import { RecipeService } from "./services/recipe.service";
// httpclient
import { HttpClientModule } from "@angular/common/http";
import { AuthComponent } from "./components/auth/auth.component";
// firbase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "../environments/environment";
import { LoadingSpinnerComponent } from "./shared_model/loading-spinner/loading-spinner.component";
import { AlertComponent } from "./components/alert/alert.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
