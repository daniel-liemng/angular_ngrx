import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from 'src/app/services/post.service';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPosts,
  loadPostsSuccess,
  // loadSinglePostSuccess,
  updatePost,
  updatePostSuccess,
} from './post.actions';
import { map, mergeMap, filter, switchMap, withLatestFrom, of } from 'rxjs';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';
import { Post } from 'src/app/models/post.model';
import { Update } from '@ngrx/entity';
import { AppState } from '../app/app.state';
import { Store } from '@ngrx/store';
import { getAllPosts } from './post.selectors';
import { dummyAction } from '../auth/auth.actions';

@Injectable()
export class PostEffect {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store: Store<AppState>
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      withLatestFrom(this.store.select(getAllPosts)),
      mergeMap(([action, posts]) => {
        if (!posts.length || posts.length === 1) {
          return this.postService.getPosts().pipe(
            map((posts) => {
              return loadPostsSuccess({ posts });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  // loadPosts$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadPosts),
  //     mergeMap((action) => {
  //       return this.postService.getPosts().pipe(
  //         map((posts) => {
  //           return loadPostsSuccess({ posts });
  //         })
  //       );
  //     })
  //   );
  // });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postService.addPost(action.post).pipe(
          map((post) => {
            return addPostSuccess({ post });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      mergeMap((action) => {
        return this.postService.updatePost(action.post).pipe(
          map((post) => {
            const updatedPost: Update<Post> = {
              id: action.post.id!,
              changes: {
                ...action.post,
              },
            };
            return updatePostSuccess({ post: updatedPost });
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      mergeMap((action) => {
        return this.postService.deletePost(action.id).pipe(
          map((data) => {
            return deletePostSuccess({ id: action.id });
          })
        );
      })
    );
  });

  getSinglePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/posts/details');
      }),
      map((r: any) => {
        return r.payload.routerState['params']['id'];
      }),
      withLatestFrom(this.store.select(getAllPosts)),
      switchMap(([id, posts]) => {
        if (!posts.length) {
          return this.postService.getPostById(id).pipe(
            // return this.postService.getPosts().pipe(
            map((post) => {
              return loadPostsSuccess({ posts: [{ ...post }] });
              // return loadPostsSuccess({ posts: post });
            })
          );
        }

        return of(dummyAction());
      })
    );
  });

  // getSinglePost$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ROUTER_NAVIGATION),
  //     filter((r: RouterNavigatedAction) => {
  //       return r.payload.routerState.url.startsWith('/posts/details');
  //     }),
  //     map((r: any) => {
  //       return r.payload.routerState['params']['id'];
  //     }),
  //     switchMap((id) => {
  //       return this.postService.getPostById(id).pipe(
  //         map((post) => {
  //           return loadPostsSuccess({ posts: [{ ...post }] });
  //         })
  //       );
  //     })
  //   );
  // });
}
