import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public isAuthenticated() {
    return this.getToken();
  }

  public getToken(): string {
    const token = localStorage.getItem('token');
    return token != null ? token : '';
  }
}
