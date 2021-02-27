import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Paging } from 'src/app/interfaces/base/Paging.interface';
import { Branch } from 'src/app/interfaces/Branch.interface';
import { Personal } from 'src/app/interfaces/Person.interface';
import { AlertService } from 'src/app/service/alert.service';

@Injectable()
export class ManagementService {

  constructor(private _http: HttpClient, private _alert: AlertService) { }

  getInstitutions(filter: any, paging: Paging) {
    let params = {};
    Object.keys(filter).forEach(key => {
      if (filter[key]) params[key] = filter[key]
    })
    return this._http.get(`api/institutions?page=${paging.page || 0}`, { params: params }).pipe(tap(() => { }, (err: HttpErrorResponse) => this.errorHandler(err)));
  }

  addInstitution(data) {
    return this._http.post(`api/institutions/create`, data).pipe(tap(() => { }, (err: HttpErrorResponse) => this.errorHandler(err)));
  }

  editInstitution(id, data) {
    return this._http.put(`api/institutions/${id}`, data).pipe(tap(() => { }, (err: HttpErrorResponse) => this.errorHandler(err)));
  }

  getInstitution(id) {
    return this._http.get(`api/institutions/${id}`).pipe(tap(() => { }, (err: HttpErrorResponse) => this.errorHandler(err)));
  }

  addBranch(branch: Branch) {
    return this._http.post(`api/institutions/${branch.institution_id}/branches/create`, branch).pipe(tap(() => { }, (err: HttpErrorResponse) => this.errorHandler(err)));
  }

  editBranch(id: number, branch: Branch) {
    return this._http.put(`api/institutions/${branch.institution_id}/branches/${id}`, branch).pipe(tap(() => { }, (err: HttpErrorResponse) => this.errorHandler(err)));
  }

  getBranch(institution_id: number, id: number) {
    return this._http.get(`api/institutions/${institution_id}/branches/${id}`).pipe(tap(() => { }, (err: HttpErrorResponse) => this.errorHandler(err)));
  }

  addPersonal(personal: Personal, institution_id: number, branch_id: number) {
    return this._http.post(`api/institutions/${institution_id}/branches/${branch_id}/personal/create`, personal).pipe(tap(() => { }, (err: HttpErrorResponse) => this.errorHandler(err)));
  }

  editPersonal(id: number, personal: Personal, institution_id: number, branch_id: number) {
    return this._http.put(`api/institutions/${institution_id}/branches/${branch_id}/personal/${id}`, personal).pipe(tap(() => { }, (err: HttpErrorResponse) => this.errorHandler(err)));
  }

  errorHandler(err: HttpErrorResponse) {
    this._alert.call({
      text: err.error.message || err.error.console.error
    });
  }

}
