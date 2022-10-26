import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          'x-user-name': 'admsk\\dvkudryavt',
          Authorization: `Bearer ${this.authService.getToken()}`,
        },
      });
    }

    return next.handle(req);
  }
}
