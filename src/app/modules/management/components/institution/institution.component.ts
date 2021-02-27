import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/interfaces/Branch.interface';
import { Institution } from 'src/app/interfaces/Institution.interface';
import { ManagementService } from '../../service/management.service';
import { AddBranchComponent } from '../add-branch/add-branch.component';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {
  institution: Institution;
  columns: any = {
    address: { value: 'მისამართი', type: 'text' },
    manager_name: { value: 'მენეჯერი', type: 'text' },
  };

  actions = [
    {
      icon: 'remove_red_eye', color: 'accent', key: 'view', action: (el: any, action: any) => {
        this.actionButton(el, action);
      }
    },
    {
      icon: 'edit', color: 'primary', key: 'edit', action: (el: any, action: any) => {
        this.actionButton(el, action);
      }
    },
  ];

  constructor(private _route: ActivatedRoute, private _router: Router, private _dialog: MatDialog, private _service: ManagementService) {
    this._route.params.subscribe(params => {
      if (params.id) this.getInstitution(params.id);
    })
  }

  ngOnInit(): void {
  }

  getInstitution(id: number) {
    this._service.getInstitution(id).subscribe((res: Institution) => {
      if (res) this.institution = res;
    })
  }

  actionButton(branch: Branch, action) {
    switch (action.key) {
      case 'edit': {
        this.addBranch(branch)
      } break;
      case 'view': {
        this._router.navigate([`/protected/management/institution/${this.institution.id}/branch/${branch.id}`])
      } break;
    }
  }

  addBranch(branch?: Branch) {
    this._dialog.open(AddBranchComponent, {
      data: { branch, institution_id: this.institution.id, institution_name: this.institution.name }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getInstitution(this.institution.id);
      }
    });
  }
}
