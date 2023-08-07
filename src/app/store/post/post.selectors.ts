import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';

const getPostState = createFeatureSelector<PostState>('post');

export const getAllPosts = createSelector(getPostState, (state) => {
  return state.posts;
});
