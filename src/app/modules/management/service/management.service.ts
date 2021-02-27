import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paging } from 'src/app/interfaces/base/Paging.interface';

@Injectable()
export class ManagementService {

  constructor(private _http: HttpClient) { }

  getInstitutions(filter: any, paging: Paging) {
    let params = {};
    Object.keys(filter).forEach(key => {
      if (filter[key]) params[key] = filter[key]
    })
    return this._http.get(`api/institutions?page=${paging.page || 0}`, { params: params });
  }
}
