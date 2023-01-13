import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent, SignInComponent, SignUpComponent, AuthenticationEffects, authenticationReducer } from '@app/authentication';
const authenticationRoutes = [
    {
        path: 'auth',
        component: AuthenticationComponent,
        children: [
            { path: 'sign-in', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent },
            { path: '', redirectTo: 'sign-in', pathMatch: 'full' }
        ]
    }
];
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    NgModule({
        declarations: [
            SignInComponent,
            SignUpComponent,
            AuthenticationComponent
        ],
        imports: [
            SharedModule,
            FormsModule,
            RouterModule.forChild(authenticationRoutes),
            StoreModule.forFeature('authentication', authenticationReducer),
            EffectsModule.forFeature([AuthenticationEffects]),
            ReactiveFormsModule
        ]
    })
], AuthenticationModule);
export { AuthenticationModule };
//# sourceMappingURL=authentication.module.js.map