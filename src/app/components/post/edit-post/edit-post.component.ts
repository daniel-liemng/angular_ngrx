import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app/app.state';
import { updatePost } from 'src/app/store/post/post.actions';
import { getPostById } from 'src/app/store/post/post.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  postForm!: FormGroup;
  post!: Post;
  postSubscription!: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
    // User ngrx/router
    this.store.select(getPostById).subscribe((post) => {
      if (post) {
        this.post = post!;
        this.postForm.patchValue({
          title: post?.title,
          description: post?.description,
        });
      }
    });

    // this.route.paramMap.subscribe((params) => {
    //   const id = params.get('id');
    //   this.postSubscription = this.store
    //     .select(getPostById(id as string))
    //     .subscribe((data) => {
    //       this.post = data;
    //       this.createForm();
    //     });
    // });
  }

  createForm() {
    this.postForm = new FormGroup({
      // title: new FormControl(this.post.title, [
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      // description: new FormControl(this.post.description, [
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  get title() {
    return this.postForm.get('title');
  }

  get description() {
    return this.postForm.get('description');
  }

  onUpdatePost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(updatePost({ post }));

    this.postForm.reset();
    this.router.navigate(['posts']);
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
