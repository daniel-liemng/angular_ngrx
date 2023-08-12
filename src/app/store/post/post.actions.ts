import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export const ADD_POST = '[Post Page] Add post';
export const UPDATE_POST = '[Post Page] Update post';

export const addPost = createAction(ADD_POST, props<{ post: Post }>());
export const updatePost = createAction(UPDATE_POST, props<{ post: Post }>());
