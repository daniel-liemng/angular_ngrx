import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';
import { Post } from 'src/app/models/post.model';
import { getCurrentRoute } from '../router/router.selector';
import { RouterStateUrl } from '../router/custom-serializer';

export const POST_STATE_NAME = 'post';

const getPostState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const getAllPosts = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  getAllPosts,
  getCurrentRoute,
  (posts: Post[], route: RouterStateUrl) => {
    return posts ? posts.find((post) => post.id === route.params['id']) : null;
  }
);

// export const getPostById = (id: string) =>
//   createSelector(getPostState, (state: any) => {
//     return state.posts.find((post: Post) => post.id === id);
//   });
