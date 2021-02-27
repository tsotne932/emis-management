import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paging } from 'src/app/interfaces/base/Paging.interface';

@Injectable()
export class ManagementService {

  constructor(private _http: HttpClient) { }

  getInstitutions(filter: any, paging: Paging) {
    return this._http.get(`api/institutions?page=${paging.page || 0}`);
  }
}
