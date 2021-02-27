import { NgModule } from '@angular/core';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ManagementComponent],
  imports: [
    SharedModule,
    ManagementRoutingModule,

  ]
})
export class ManagementModule { }
