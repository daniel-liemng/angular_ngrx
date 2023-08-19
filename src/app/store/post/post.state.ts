import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Post } from 'src/app/models/post.model';

// Entity
export interface PostState extends EntityState<Post> {}

export const postAdapter = createEntityAdapter<Post>();

export const initialState: PostState = postAdapter.getInitialState();

// export interface PostState {
//   posts: Post[];
// }

// export const initialState: PostState = {
//   posts: [],

//   // posts: [
//   //   { id: '1', title: 'Post 1', description: 'Post Content 1' },
//   //   { id: '2', title: 'Post 2', description: 'Post Content 2' },
//   //   { id: '3', title: 'Post 3', description: 'Post Content 3' },
//   // ],
// };
