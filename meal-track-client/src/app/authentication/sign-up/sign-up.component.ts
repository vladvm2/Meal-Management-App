import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { mustMatch } from '@app/shared';
import { AppState } from '@app/app.state';
import { Store } from '@ngrx/store';
import { User } from '@app/core';
import * as fromAuthentication from '@app/authentication/store';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  errorMessage: string;
  registerMessage: string;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: mustMatch('password', 'confirmPassword')
    });
    this.store.dispatch(fromAuthentication.clear());
    this.store.select(fromAuthentication.getAuthenticationError).subscribe(errorMessage => this.errorMessage = errorMessage);
    this.store.select(fromAuthentication.getAuthenticationSuccess).subscribe(message => {
      this.registerMessage = message;
      if (this.registerMessage) {
        this.clearForm();
        this.submitted = false;
      }
    });
  }

  get f() {
    return this.signUpForm.controls;
  }

  signUp() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    const user: User = {
      email: this.signUpForm.get('email').value,
      fullName: this.signUpForm.get('fullName').value,
      password: this.signUpForm.get('password').value
    };
    this.store.dispatch(fromAuthentication.signUp({ user: user }));
  }

  clearForm() {
    this.signUpForm.reset();
  }
}
