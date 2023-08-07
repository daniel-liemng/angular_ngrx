import { counterReducer } from '../counter/counter.reducer';
import { CounterState } from '../counter/counter.state';
import { postReducer } from '../post/post.reducer';
import { PostState } from '../post/post.state';

export interface AppState {
  counter: CounterState;
  post: PostState;
}

export const appReducer = {
  counter: counterReducer,
  post: postReducer,
};
