import { Component, OnInit } from '@angular/core';
import { AppStore } from '../../store/welcome.store';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {

  vm$ = this.store.vm$;

  constructor(
    private store: AppStore
  ) { }

  ngOnInit(): void {
  }

}
