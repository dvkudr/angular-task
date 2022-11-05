import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { commonSelectors } from '../../store/common/selectors/common.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  readonly subscription: Subscription = new Subscription();

  private AuthToken = '';

  constructor(private store: Store) {
    this.subscription.add(
      this.store
        .select(commonSelectors.token)
        .pipe()
        .subscribe(token => this.AuthToken = token));
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
