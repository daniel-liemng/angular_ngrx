import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  changeName,
  customIncrement,
} from 'src/app/store/counter/counter.actions';
import { getName } from 'src/app/store/counter/counter.selectors';
import { CounterState } from 'src/app/store/counter/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
})
export class CounterInputComponent implements OnInit {
  value!: number;

  // Opt 1
  // name!: string;

  // Opt 2
  name$!: Observable<string>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    // Opt 1
    // this.store.select(getName).subscribe((data) => {
    //   this.name = data;
    // });

    // Opt 2
    this.name$ = this.store.select(getName);
  }

  onAddValue() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeName() {
    this.store.dispatch(changeName());
  }
}
