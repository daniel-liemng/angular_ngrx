import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app/app.state';
import { getAllPosts } from 'src/app/store/post/post.selectors';
import { Observable } from 'rxjs';
import { deletePost } from 'src/app/store/post/post.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getAllPosts);
  }

  onDeletePost(id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
