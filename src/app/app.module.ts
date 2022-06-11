import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
// to allow use in all files in the application
import { ShoppingListService } from "./services/shopping-list.service";
import { RecipeService } from "./services/recipe.service";
// httpclient
import { HttpClientModule } from "@angular/common/http";
// firbase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "../environments/environment";
import { AlertDirective } from "./directives/alert.directive";
import { ShoppingListModule } from "./components/shopping-list/shopping-list.module";
import { SharedModule } from "./shared_model/shared.module";
import { AuthModule } from "./components/auth/auth.module";
// NgRX
import { StoreModule } from "@ngrx/store";
import { shoppingListReducer } from "./components/shopping-list/store/shopping-list.reducer";
// NgRX devtools
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer } from "./store/app.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./components/auth/store/auth.effect";

@NgModule({
  declarations: [AppComponent, HeaderComponent, AlertDirective],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
