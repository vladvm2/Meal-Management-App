import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.state';
import { User } from '@app/core/models/user.model';
import * as  fromAuthentication from '@app/authentication/store';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  submitted = false;
  errorMessage: string;
  isAuthenticated: boolean;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.store.dispatch(fromAuthentication.clear());
    this.store.select(fromAuthentication.getAuthenticationError).subscribe(errorMessage => this.errorMessage = errorMessage);
    this.store.select(fromAuthentication.getAuthenticationStatus).subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  get f() {
    return this.signInForm.controls;
  }

  signIn() {
    this.submitted = true;
    if (this.signInForm.invalid) {
      return;
    }
    const user: User = {
      email: this.signInForm.get('email').value,
      password: this.signInForm.get('password').value
    }
    this.store.dispatch(fromAuthentication.signIn({ user: user }));
  }
}