import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./components/shopping-list/shopping-edit/shopping-edit.component";
// to allow use in all files in the application
import { ShoppingListService } from "./services/shopping-list.service";
import { DropdownDirective } from "./directives/dropdown.directive";
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
import { AlertDirective } from "./directives/alert.directive";
import { RecipeModule } from "./components/recipes/recipe.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    AlertDirective,
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
    AngularFireDatabaseModule,
    RecipeModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
