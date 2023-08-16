import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app/app.state';
import { isAuthenticated } from '../store/auth/auth.selectors';
import { Observable, map } from 'rxjs';
import { Router, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.select(isAuthenticated).pipe(
      map((authenticated) => {
        if (!authenticated) {
          return this.router.createUrlTree(['auth']);
        }

        return true;
      })
    );
  }
}
