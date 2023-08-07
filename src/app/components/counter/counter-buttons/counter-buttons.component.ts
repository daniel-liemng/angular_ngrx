import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from 'src/app/store/counter/counter.actions';
import { CounterState } from 'src/app/store/counter/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: CounterState }>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
