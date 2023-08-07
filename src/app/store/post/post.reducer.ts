import { createReducer, on } from '@ngrx/store';
import { initialState } from './post.state';
import { getPosts } from './post.actions';

const _postReducer = createReducer(
  initialState,
  on(getPosts, (state) => {
    return {
      ...state,
    };
  })
);

export const postReducer = (state: any, action: any) => {
  return _postReducer(state, action);
};
