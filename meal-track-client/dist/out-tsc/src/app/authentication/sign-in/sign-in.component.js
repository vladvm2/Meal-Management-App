import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as fromAuthentication from '@app/authentication/store';
let SignInComponent = class SignInComponent {
    constructor(formBuilder, store) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.submitted = false;
    }
    ngOnInit() {
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
        const user = {
            email: this.signInForm.get('email').value,
            password: this.signInForm.get('password').value
        };
        this.store.dispatch(fromAuthentication.signIn({ user: user }));
    }
};
SignInComponent = __decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.css']
    })
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map