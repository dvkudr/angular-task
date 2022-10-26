import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from '../shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  readonly subscription: Subscription = new Subscription();

  private AuthToken = '';

  constructor(private commonService: CommonService, private router: Router) {
    this.subscription.add(
      commonService.authToken$.subscribe(x => {
        this.AuthToken = x;
      })
    );
  }

  public isAuthenticated() {
    return this.AuthToken as unknown as boolean;
  }

  public getToken(): string {
    return this.AuthToken;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
