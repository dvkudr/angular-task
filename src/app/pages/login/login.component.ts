import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonActions } from 'src/app/store/common/actions/common.action';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {
  readonly subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
    private commonService: CommonService
  ) { }

  loginForm: FormGroup = this.fb.group({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(
        CommonActions.getToken({
          payload: {
            login: this.loginForm.value.login || '',
            password: this.loginForm.value.password || ''
          },
        })
      );


      // to be removed
      const login = this.loginForm.value.login;
      const password = this.loginForm.value.password;

      this.subscription.add(
        this.commonService.fetchToken(login, password).subscribe({
          next: x => {
            this.commonService.authToken$.next(x.access_token);
            this.commonService.authError$.next('');
            this.router.navigate(['']);
          },
          error: err => {
            this.commonService.authToken$.next('');
            this.commonService.authError$.next(err.message);
          },
        })
      );
      // to be removed


    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

