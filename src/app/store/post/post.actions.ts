import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export const ADD_POST = '[Post Page] Add post';

export const addPost = createAction(ADD_POST, props<{ post: Post }>());
