import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { mustMatch } from '@app/shared';
import * as fromAuthentication from '@app/authentication/store';
let SignUpComponent = class SignUpComponent {
    constructor(formBuilder, store) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.submitted = false;
    }
    ngOnInit() {
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
        this.store.select(fromAuthentication.getAuthenticationRegisterMessage).subscribe(message => {
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
        const user = {
            email: this.signUpForm.get('email').value,
            fullName: this.signUpForm.get('fullName').value,
            password: this.signUpForm.get('password').value
        };
        this.store.dispatch(fromAuthentication.signUp({ user: user }));
    }
    clearForm() {
        this.signUpForm.reset();
    }
};
SignUpComponent = __decorate([
    Component({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css']
    })
], SignUpComponent);
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map