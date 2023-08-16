import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export const ADD_POST = '[Post Page] Add post';
export const ADD_POST_SUCCESS = '[Post Page] Add post success';

export const UPDATE_POST = '[Post Page] Update post';
export const DELETE_POST = '[Post Page] Delete post';

export const LOAD_POSTS = '[Post Page] Load posts';
export const LOAD_POSTS_SUCCESS = '[Post Page] Load posts success';

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);

export const addPost = createAction(ADD_POST, props<{ post: Post }>());
export const addPostSuccess = createAction(
  ADD_POST_SUCCESS,
  props<{ post: Post }>()
);

export const updatePost = createAction(UPDATE_POST, props<{ post: Post }>());
export const deletePost = createAction(DELETE_POST, props<{ id: string }>());
