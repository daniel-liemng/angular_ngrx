import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostListComponent } from 'src/app/components/post/post-list/post-list.component';
import { AddPostComponent } from 'src/app/components/post/add-post/add-post.component';
import { EditPostComponent } from 'src/app/components/post/edit-post/edit-post.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from 'src/app/store/post/post.reducer';
import { POST_STATE_NAME } from 'src/app/store/post/post.selectors';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    AddPostComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(POST_STATE_NAME, postReducer),
    RouterModule.forChild(routes),
  ],
})
export class PostModule {}