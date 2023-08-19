import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const LOGIN_START = '[Auth Page] Login start';
export const LOGIN_SUCCESS = '[Auth Page] Login success';
export const LOGIN_FAIL = '[Auth Page] Login fail';

export const SIGNUP_START = '[Auth Page] Signup start';
export const SIGNUP_SUCCESS = '[Auth Page] Signup success';

export const AUTO_LOGIN = '[Auth Page] Auto login';
export const LOGOUT = '[Auth Page] Logout';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const signupStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User; redirect: boolean }>()
);

export const autoLogin = createAction(AUTO_LOGIN);
export const autoLogout = createAction(LOGOUT);

export const dummyAction = createAction('[Dummy Action]');
