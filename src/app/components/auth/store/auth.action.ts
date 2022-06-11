import { Action } from "@ngrx/store";

export const LOGIN = "LOGIN";

export class LoginAction implements Action {
  readonly type: string = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export type AuthActions = LoginAction;
