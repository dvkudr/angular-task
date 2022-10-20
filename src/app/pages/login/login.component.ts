import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommmonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  readonly subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private commonService: CommmonService
  ) { }

  loginForm: FormGroup = this.fb.group({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      const login = this.loginForm.value.login;
      const password = this.loginForm.value.password;

      this.subscription.add(
        this.commonService.fetchToken(login, password)
          .subscribe({
            next: (x) => {
              this.commonService.authToken$.next(x.access_token);
              this.commonService.authError$.next(undefined);
            },
            error: (err) => {
              this.commonService.authToken$.next("");
              this.commonService.authError$.next(err);
            }
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
