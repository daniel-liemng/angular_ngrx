import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import { CounterComponent } from './pages/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { CounterInputComponent } from './components/counter/counter-input/counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app/app.state';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterComponent,
    CounterInputComponent,
    NavbarComponent,
    HomeComponent,
    PostComponent,
    PostListComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
