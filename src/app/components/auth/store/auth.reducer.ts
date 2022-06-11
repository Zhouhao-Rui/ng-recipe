import { User } from "../user.model";
import { AuthActions, LOGIN } from "./auth.action";

export interface State {
  user: User;
}

const initial_state: State = {
  user: null
};

export function authReducer(state = initial_state, action: AuthActions) {
  switch (action.type) {
    case LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user
      };
    default:
      return state;
  }
}
