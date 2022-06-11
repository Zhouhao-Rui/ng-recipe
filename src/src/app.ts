/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
import "@angular/platform-server/init";

import { enableProdMode } from "@angular/core";

import { environment } from "../environments/environment";
import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { AppModule } from "../app/app.module";
import { AppComponent } from "../app/app.component";

if (environment.production) {
  enableProdMode();
}
@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
export { renderModule } from "@angular/platform-server";
