import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { loginSuccess, signupSuccess } from './auth.actions';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);

export const authReducer = (state: any, action: any) => {
  return _authReducer(state, action);
};
