import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CommmonService {
    private readonly authUrl =
        'http://kong.fte3.10.97.145.65.nip.io' +
        '/sso/auth/realms/mts/protocol/openid-connect/token';

    public token = new Subject<string>();

    constructor(private httpClient: HttpClient) {}

    fetchToken(login: string, password: string) : Observable<AuthToken> {
        let body = new URLSearchParams();
        body.set('grant_type', 'client_credentials');

        let options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', 'Basic ' + btoa(login + ':' + password)),
        };

        return this.httpClient.post<AuthToken>(this.authUrl, body.toString(), options);
    }    
}

export interface AuthToken {
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    token_type: string;
    scope: string;
}