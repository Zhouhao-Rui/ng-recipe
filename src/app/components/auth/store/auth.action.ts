import { Action } from "@ngrx/store";

export const LOGIN_START = "[AUTH] LOGIN_START";
export const LOGIN = "[AUTH] LOGIN";

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

export class LoginStartAction implements Action {
  readonly type: string = LOGIN_START;
  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) {}
}

export type AuthActions = LoginAction;
