import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import * as AuthActions from "./auth.action";
// similar to redux-thunk
@Injectable()
export class AuthEffects {
  // @Effect({dispatch:false})
  // authLogin = this.actions$.pipe(ofType(AuthActions.LOGIN_START), switchMap((authData: AuthActions.LoginStartAction) => {
  // return new AuthService().signin()
  // }));
  constructor(private actions$: Actions) {}
}
