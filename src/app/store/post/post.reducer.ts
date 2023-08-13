import { createReducer, on } from '@ngrx/store';
import { initialState } from './post.state';
import { addPost, deletePost, updatePost } from './post.actions';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let newPost = { ...action.post };
    newPost.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, newPost],
    };
  }),
  on(updatePost, (state, action) => {
    let editPost = action.post;
    const updatedPosts = state.posts.map((post) => {
      return post.id === editPost.id ? editPost : post;
    });

    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePost, (state, action) => {
    return {
      ...state,
      posts: state.posts.filter((post) => post.id !== action.id),
    };
  })
);

export const postReducer = (state: any, action: any) => {
  return _postReducer(state, action);
};