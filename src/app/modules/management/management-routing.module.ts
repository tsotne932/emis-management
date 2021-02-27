import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { UsersComponent } from './components/users/users.component';
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
    children: [
      {
        path: 'institutions',
        component: InstitutionsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
