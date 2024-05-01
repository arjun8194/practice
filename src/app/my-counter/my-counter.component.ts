import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { counterReducer } from '../counter.reducer';
@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,StoreModule],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.scss'
})
export class MyCounterComponent {
  count$: Observable<number>;


  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
