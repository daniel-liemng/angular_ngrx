import { createReducer, on } from '@ngrx/store';
import { initialState, postAdapter } from './post.state';
import {
  addPostSuccess,
  // deletePost,
  deletePostSuccess,
  loadPostsSuccess,
  // updatePost,
  updatePostSuccess,
} from './post.actions';

const _postReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    return postAdapter.addOne(action.post, state);

    // let newPost = { ...action.post };
    // // newPost.id = (state.posts.length + 1).toString();
    // return {
    //   ...state,
    //   posts: [...state.posts, newPost],
    // };
  }),
  on(updatePostSuccess, (state, action) => {
    return postAdapter.updateOne(action.post, state);

    // let editPost = action.post;
    // const updatedPosts = state.posts.map((post) => {
    //   return post.id === editPost.id ? editPost : post;
    // });

    // return {
    //   ...state,
    //   posts: updatedPosts,
    // };
  }),
  on(deletePostSuccess, (state, action) => {
    return postAdapter.removeOne(action.id, state);

    // return {
    //   ...state,
    //   posts: state.posts.filter((post) => post.id !== action.id),
    // };
  }),
  on(loadPostsSuccess, (state, action) => {
    return postAdapter.setAll(action.posts, state);

    // return {
    //   ...state,
    //   posts: action.posts,
    // };
  })
);

export const postReducer = (state: any, action: any) => {
  return _postReducer(state, action);
};
