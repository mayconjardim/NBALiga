import { FormControl, Validators } from '@angular/forms';
import { Creds } from './../../models/creds';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toast: ToastrService) {}

  user = new FormControl(null, Validators.required);
  password = new FormControl(null, Validators.minLength(3));

  login() {
    this.toast.error('Usuário e/ou senha inválidos!', 'Login');
    this.creds.password = '';
  }

  validForm(): boolean {
    return this.user.valid && this.password.valid;
  }
}
