import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { AuthGuard } from './services/auth.guard';
import { SinglePostComponent } from './components/post/single-post/single-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'counter',
    loadChildren: () =>
      import('./pages/counter/counter.module').then(
        (module) => module.CounterModule
      ),
  },
  {
    path: 'posts',

    canActivate: mapToCanActivate([AuthGuard]),
    loadChildren: () =>
      import('./pages/post/post.module').then((module) => module.PostModule),
  },
  {
    path: 'posts/details/:id',
    component: SinglePostComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
