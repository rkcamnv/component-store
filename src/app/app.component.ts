import { Component } from '@angular/core';
import { AppStore } from './pages/welcome/store/welcome.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  vm$ = this.store.vm$;

  constructor(
    private store: AppStore
  ) {
  }
}
