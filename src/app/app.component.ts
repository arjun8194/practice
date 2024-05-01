import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, StoreModule, MyCounterComponent,CommonModule]
})
export class AppComponent {
  title = 'ngrx-app';
}
