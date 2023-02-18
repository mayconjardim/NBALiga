import { AuthService } from './../../../../core/services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Creds } from './../../models/creds';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  creds: Creds = {
    user: '',
    password: '',
  };

  constructor(
    private toast: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  user = new FormControl(null, Validators.required);
  password = new FormControl(null, Validators.minLength(3));

  login() {
    const observer = {
      next: (res: any) => {
        this.handleSuccessfulLogin(res);
      },
      error: () => {
        this.handleFailedLogin();
      },
    };

    this.authService.authenticate(this.creds).subscribe(observer);
  }

  validForm(): boolean {
    return this.user.valid && this.password.valid;
  }

  handleSuccessfulLogin(response: any) {
    this.authService.successfulLogin(
      response['access_token'],
      response['User'],
      response['UserId'],
      response['Team']
    );
    this.toast.success('Logado com sucesso!', 'Login');
    this.router.navigate(['']);
  }

  handleFailedLogin() {
    this.toast.error('Usuário e/ou senha inválidos!', 'Erro');
  }
}
