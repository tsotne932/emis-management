import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Paging } from 'src/app/interfaces/base/Paging.interface';
import { Institution } from 'src/app/interfaces/Institution.interface';
import { ManagementService } from '../../service/management.service';
import { AddInstitutionComponent } from '../add-institution/add-institution.component';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})
export class InstitutionsComponent implements OnInit {
  data: Institution[];
  columns: any = {
    pid: { value: 'საიდენტიფიკაციო', type: 'text' },
    name: { value: 'დასახელება', type: 'text' },
    number: { value: 'საკონტაქტო ნომერი', type: 'text' },
  };

  paging: Paging = {
    page: 1,
    limit: 10,
    total: 0
  };
  searchForm: FormGroup;
  faculties: any = {};

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

  constructor(private _fb: FormBuilder, private _dialog: MatDialog, private _router: Router, private _service: ManagementService) {
    this.initSearchForm()
  }

  ngOnInit(): void {
    this.loadData();
  }

  initSearchForm() {
    this.searchForm = this._fb.group({
      pid: new FormControl(),
      name: new FormControl(),
    });
  }

  loadData() {
    this._service.getInstitutions(this.searchForm.value, this.paging).subscribe((res: any) => {
      this.data = res.data
      this.paging.page = res.current_page;
      this.paging.limit = res.per_page;
      this.paging.total = res.total;
    })
  }

  page(ev: any) {
    this.paging.page = ev.pageIndex + 1;
    this.paging.limit = ev.pageSize;
    this.loadData();
  }

  actionButton(institution, action) {
    switch (action.key) {
      case 'edit': {
        this._dialog.open(AddInstitutionComponent, {
          data: {
            institution
          }
        }).afterClosed().subscribe(res => {
          if (res) {
            this.loadData();
          }
        });
      } break;
      case 'view': {
        this._router.navigate([`/protected/management/institution/${institution.id}`])
      } break;
    }
  }

  addInstitution() {
    this._dialog.open(AddInstitutionComponent, { data: {} }).afterClosed().subscribe(res => {
      if (res) {
        this.loadData();
      }
    });

  }

}
