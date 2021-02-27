import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SharedModule } from '../shared/shared.module';
import { GuestComponent } from './components/guest/guest.component';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    LoginComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
