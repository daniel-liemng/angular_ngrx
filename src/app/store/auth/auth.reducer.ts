import { createReducer } from '@ngrx/store';
import { initialState } from './auth.state';

const _authReducer = createReducer(initialState);

export const authReducer = (state: any, action: any) => {
  return _authReducer(state, action);
};
