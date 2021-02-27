import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent } from './components/branch/branch.component';
import { InstitutionComponent } from './components/institution/institution.component';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { UsersComponent } from './components/users/users.component';
import { ManagementComponent } from './management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'management/institutions',
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
        path: 'institution/:id',
        component: InstitutionComponent
      },
      {
        path: 'institution/:institution/branch/:id',
        component: BranchComponent
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
