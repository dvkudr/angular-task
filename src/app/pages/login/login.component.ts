import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonActions } from 'src/app/store/common/actions/common.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
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
    }
  }
}

