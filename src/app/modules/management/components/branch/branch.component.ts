import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Branch } from 'src/app/interfaces/Branch.interface';
import { Personal } from 'src/app/interfaces/Person.interface';
import { ManagementService } from '../../service/management.service';
import { AddPersonalComponent } from '../add-personal/add-personal.component';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  branch: Branch;
  columns: any = {
    name: { value: 'სახელი', type: 'text' },
    pid: { value: 'პირადი ნომერი', type: 'text' },
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

  constructor(private _route: ActivatedRoute, private _dialog: MatDialog, private _service: ManagementService) {
    this._route.params.subscribe(params => {
      if (params.id) this.getBranch(params.institution, params.id);
    })
  }


  ngOnInit(): void {
  }

  getBranch(institution_id: number, id: number) {
    this._service.getBranch(institution_id, id).subscribe((res: Branch) => {
      if (res) this.branch = res;
    })
  }

  actionButton(personal: Personal, action) {
    this.addPersonal(personal, action.key);
  }

  addPersonal(personal?: Personal, key?: string) {
    this._dialog.open(AddPersonalComponent, {
      data: { key, personal, institution_id: this.branch.institution_id, branch_id: this.branch.id }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getBranch(this.branch.institution_id, this.branch.id);
      }
    });
  }
}
