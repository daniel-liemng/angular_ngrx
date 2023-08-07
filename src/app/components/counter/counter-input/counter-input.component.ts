import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/store/counter/counter.actions';
import { CounterState } from 'src/app/store/counter/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
})
export class CounterInputComponent {
  value!: number;

  constructor(private store: Store<{ counter: CounterState }>) {}

  onAddValue() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }
}
