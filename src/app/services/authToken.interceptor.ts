import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppState } from '../store/app/app.state';
import { Store } from '@ngrx/store';
import { getToken } from '../store/auth/auth.selectors';
import { exhaustMap } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      exhaustMap((token) => {
        console.log(token);
        if (!token) {
          return next.handle(req);
        }
        let modifiedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });

        return next.handle(modifiedRequest);
      })
    );
  }
}
