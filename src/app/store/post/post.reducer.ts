import { createReducer, on } from '@ngrx/store';
import { initialState } from './post.state';
import { addPost } from './post.actions';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let newPost = { ...action.post };
    newPost.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, newPost],
    };
  })
);

export const postReducer = (state: any, action: any) => {
  return _postReducer(state, action);
};
