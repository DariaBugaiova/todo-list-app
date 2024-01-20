import { Component, DoCheck, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { Store} from "@ngrx/store";
import { taskSelector } from './store/reducer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'todo-list-app';
  isMenuVisible = false;

  constructor(private router: Router, private store: Store) {}

  ngDoCheck(): void {
    const currentroute = this.router.url;
    if (currentroute === '/auth/login' || currentroute === '/auth/signup') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true;
    }
  }

}
