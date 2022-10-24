import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  Subject,
  throwError,
} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private readonly authUrl = `${environment.authDomainUrl}/sso/auth/realms/mts/protocol/openid-connect/token`;

  public authToken$ = new BehaviorSubject<string>('');

  public authError$ = new Subject<string>();

  constructor(private httpClient: HttpClient) {}

  fetchToken(login: string, password: string): Observable<AuthToken> {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');

    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Basic ' + btoa(login + ':' + password)),
    };

    return this.httpClient
      .post<AuthToken>(this.authUrl, body.toString(), options)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(
            () =>
              new Error(`${err.error.error} (${err.error.error_description})`)
          )
        )
      );
  }
}

export interface AuthToken {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  scope: string;
}
