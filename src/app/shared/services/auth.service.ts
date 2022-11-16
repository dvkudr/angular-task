import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public isAuthenticated(): boolean {
    return this.getToken() as unknown as boolean;
  }

  public getToken(): string {
    const token = localStorage.getItem('token');
    return token || '';
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
