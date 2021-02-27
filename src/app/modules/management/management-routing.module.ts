import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'management',
    pathMatch: 'full'
  },
  {
    path: 'management',
    component: ManagementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
