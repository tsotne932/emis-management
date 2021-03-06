import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loading } from '../service/loading.service';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    Loading.do.next(true);
    return next.handle(request).pipe(tap((e) => {
      if (e instanceof HttpResponse) {
        Loading.do.next(false);
      }
    }, () => {
      Loading.do.next(false);
    }));
  }
}
