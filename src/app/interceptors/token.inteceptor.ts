import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
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

    Loading._loading.next(true);
    return next.handle(request).pipe(map((e) => {
      if (e instanceof HttpResponse) {
        Loading._loading.next(false);

      }
      return e;
    }));
  }
}
