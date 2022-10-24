import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { CommonService } from '../shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnDestroy {
  readonly subscription: Subscription = new Subscription();

  constructor(private commonService: CommonService, private router: Router) {
    this.subscription.add(
      commonService.authToken$.subscribe(
        x => (this.isAuthenticated = x as unknown as boolean)
      )
    );
  }

  private isAuthenticated = false;

  canActivate(): Observable<boolean> {
    if (this.isAuthenticated) {
      return of(true);
    }

    this.router.navigate(['/login']);
    return of(false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

