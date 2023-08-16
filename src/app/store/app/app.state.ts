// import { counterReducer } from '../counter/counter.reducer';
// import { CounterState } from '../counter/counter.state';
// import { postReducer } from '../post/post.reducer';
// import { PostState } from '../post/post.state';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { authReducer } from '../auth/auth.reducer';
import { AUTH_STATE_NAME } from '../auth/auth.selectors';
import { AuthState } from '../auth/auth.state';
import { sharedReducer } from '../shared/shared.reducer';
import { SHARED_STATE_NAME } from '../shared/shared.selector';
import { SharedState } from '../shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
  router: RouterReducerState;
  // counter: CounterState;
  // post: PostState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  [AUTH_STATE_NAME]: authReducer,
  router: routerReducer,
  // counter: counterReducer,
  // post: postReducer,
};
