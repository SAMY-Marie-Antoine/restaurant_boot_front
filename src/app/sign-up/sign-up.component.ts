import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private formBuilder: FormBuilder, private http : HttpClient) {
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
    //this.http.
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