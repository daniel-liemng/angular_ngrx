import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from 'src/app/store/counter/counter.selectors';
import { CounterState } from 'src/app/store/counter/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  // Opt 1
  // counter$!: Observable<{ counter: number }>;

  // Opt 2
  // counter!: number;

  // Opt 3
  counter$!: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    // Opt 1
    // this.counter$ = this.store.select('counter');
    // Opt 2
    // this.store.select(getCounter).subscribe((data) => {
    //   this.counter = data;
    // });
    // Opt 3
    this.counter$ = this.store.select(getCounter);
  }
}
