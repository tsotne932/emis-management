import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Loading {

  public static _loading: BehaviorSubject<any> = new BehaviorSubject(false);

  public static isLoading: Observable<Boolean>;

  constructor() {
    // Loading._loading.subscribe(loading => {
    //   Loading.isLoading = loading;
    // })
  }
}
