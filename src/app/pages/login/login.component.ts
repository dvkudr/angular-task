import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommmonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private commonService: CommmonService
  ) { }

  loginForm: FormGroup = this.fb.group({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      let login = this.loginForm.value.login;
      let password = this.loginForm.value.password;

      this.commonService.fetchToken(login, password)
        .subscribe({
          next: (x) => this.commonService.token.next(x.access_token),
          error: () => this.commonService.token.next("")
        });
    }
  }

}
