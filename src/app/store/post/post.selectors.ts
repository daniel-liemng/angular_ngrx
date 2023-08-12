import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';
import { Post } from 'src/app/models/post.model';

export const POST_STATE_NAME = 'post';

const getPostState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const getAllPosts = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = (id: string) =>
  createSelector(getPostState, (state: any) => {
    return state.posts.find((post: Post) => post.id === id);
  });
