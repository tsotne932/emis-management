import { NgModule } from '@angular/core';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { UsersComponent } from './components/users/users.component';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { ManagementService } from './service/management.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ManagementComponent, InstitutionsComponent, UsersComponent, TableComponent],
  imports: [
    SharedModule,
    ManagementRoutingModule,

    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [ManagementService]
})
export class ManagementModule { }
