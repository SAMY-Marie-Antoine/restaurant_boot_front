import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../model';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm!: FormGroup;

  usernameCtrl!: FormControl;
  passwordCtrl!: FormControl;
  passwordConfirmCtrl! : FormControl;

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router : Router) {
    this.usernameCtrl = this.formBuilder.control("", Validators.required);
    this.passwordCtrl = this.formBuilder.control("", [Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]);
    this.passwordConfirmCtrl = this.formBuilder.control("", [Validators.required,confirmPasswordValidator(this)]);

    this.signUpForm = this.formBuilder.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl,
      passwordConfirm: this.passwordConfirmCtrl
    });
  }

  inscription() {
    this.http.post(environment.apiUrl + "/clients",{username : this.usernameCtrl.value, password : this.passwordCtrl.value}).subscribe(()=> this.router.navigate(["/"]));
  }
}

const confirmPasswordValidator = (arg1: any): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
  let arg2 : string = arg1.passwordCtrl.value;
  if (control.value !== arg2) {
    return { pwddiff: true }
  }
    return null;
  };
};