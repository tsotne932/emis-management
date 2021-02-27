import { NgModule } from '@angular/core';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [ManagementComponent, InstitutionsComponent, UsersComponent],
  imports: [
    SharedModule,
    ManagementRoutingModule,

    MatSidenavModule,
    MatListModule
  ]
})
export class ManagementModule { }
