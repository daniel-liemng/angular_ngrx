import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import { CounterComponent } from './pages/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { CounterInputComponent } from './components/counter/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterComponent,
    CounterInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
