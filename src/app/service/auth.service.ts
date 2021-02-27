import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../classes/User.class';
import { UserLogin } from '../interfaces/Userlogin.interface';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  constructor(private _http: HttpClient, private _router: Router, private _alert: AlertService) { }

  get user() {
    return this._http.get<{ user: User, status: string }>('/api/user');
  }

  get logged(): Observable<boolean> {
    return this.user.pipe(
      map((data) => {
        if (data && data.user) {
          return true
        }
        return false;
      })
    );
  }

  login(params: UserLogin) {
    return this._http.post<{ token: string, error: string }>('/api/login', {}, { params: { ...params } }).pipe(
      tap((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          if (this.redirectUrl) this._router.navigate([this.redirectUrl]);
          else this._router.navigate(['/protected/management']);
        }
      }, (err: HttpErrorResponse) => this.errorHandler(err))
    );
  }

  errorHandler(err: HttpErrorResponse) {
    this._alert.call({ text: err.error.error });
  }
}
