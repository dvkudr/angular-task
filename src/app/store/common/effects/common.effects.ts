import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  AuthToken,
  CommonService,
} from 'src/app/shared/services/common.service';
import { CommonActions } from '../actions/common.action';

@Injectable()
export class CommonEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private commonService: CommonService
  ) {}

  fetchToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommonActions.getToken),
      switchMap(({ payload }) =>
        this.commonService.fetchToken(payload.login, payload.password)
      ),
      map((result: AuthToken) => {
        localStorage.setItem('token', result.access_token);

        this.router.navigateByUrl('/inventory');

        return CommonActions.getTokenSuccess({
          payload: { token: result.access_token },
        });
      }),
      catchError(error => {
        localStorage.setItem('token', '');

        return of(
          CommonActions.getTokenError({ payload: { error: error.message } })
        );
      })
    );
  });
}
