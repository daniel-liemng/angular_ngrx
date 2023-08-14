// import { counterReducer } from '../counter/counter.reducer';
// import { CounterState } from '../counter/counter.state';
// import { postReducer } from '../post/post.reducer';
// import { PostState } from '../post/post.state';
import { sharedReducer } from '../shared/shared.reducer';
import { SHARED_STATE_NAME } from '../shared/shared.selector';
import { SharedState } from '../shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  // counter: CounterState;
  // post: PostState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  // counter: counterReducer,
  // post: postReducer,
};
