import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  usernameCtrl!: FormControl;
  passwordCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router : Router) {
    this.usernameCtrl = this.formBuilder.control("", Validators.required);
    this.passwordCtrl = this.formBuilder.control("", Validators.required);

    this.loginForm = this.formBuilder.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl,
    });
  }

  connexion() {
    this.authService.login(this.usernameCtrl.value, this.passwordCtrl.value);
  }
}
