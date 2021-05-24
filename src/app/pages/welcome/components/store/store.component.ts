import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppStore } from '../../store/welcome.store';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {

  vm$ = this.store.vm$;

  form!: FormGroup;

  constructor(
    private store: AppStore,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: ['']
    })
    this.store.updateName('Component Store');

    this.store.updateUser(this.form.valueChanges.pipe(debounceTime(500)))
  }

  onSubmit() {
    // this.store.updateUser(this.form.getRawValue())

  }
}
