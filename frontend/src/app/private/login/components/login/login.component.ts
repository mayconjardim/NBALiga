import { FormControl, Validators } from '@angular/forms';
import { Creds } from './../../models/creds';
import { Component } from '@angular/core';

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

  user = new FormControl(null, Validators.required);
  password = new FormControl(null, Validators.minLength(3));

  validForm(): boolean {
    if (this.user.valid && this.password.valid) {
      return true;
    } else return false;
  }
}
