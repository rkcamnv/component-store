import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { StoreComponent } from './components/store/store.component';
import { ServiceComponent } from './components/service/service.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    WelcomeRoutingModule],
  declarations: [WelcomeComponent, StoreComponent, ServiceComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
