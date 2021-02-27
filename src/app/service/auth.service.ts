import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../classes/User.class';
import { UserLogin } from '../interfaces/Userlogin.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  constructor(private _http: HttpClient) { }

  get user() {
    return this._http.get<{ user: User, status: string }>('/api/user');
  }

  get logged(): Observable<boolean> {
    return this.user.pipe(
      map((data) => {
        console.log(data, "data")
        if (data && data.user) {
          return true
        }
        return false;
      })
    );
  }

  login(params: UserLogin) {
    return this._http.post<{ token: string, error: string }>('/api/user', {}, { params: { ...params } });
  }

}
