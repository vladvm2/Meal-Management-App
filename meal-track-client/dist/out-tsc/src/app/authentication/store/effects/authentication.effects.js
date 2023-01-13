import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthenticationActions from '@app/authentication/store/actions/authentication.actions';
let AuthenticationEffects = class AuthenticationEffects {
    constructor(actions$, authenticationService, router) {
        this.actions$ = actions$;
        this.authenticationService = authenticationService;
        this.router = router;
        this.signIn$ = createEffect(() => this.actions$.pipe(ofType(AuthenticationActions.signIn), map((action) => action.user), switchMap((user) => {
            return this.authenticationService.signIn(user.email, user.password).pipe(map((user) => {
                return AuthenticationActions.signInSuccess({ user: user });
            }), catchError((error) => {
                return of(AuthenticationActions.signInFailure({ error: error.error.message }));
            }));
        })));
        this.signInSuccess$ = createEffect(() => this.actions$.pipe(ofType(AuthenticationActions.signInSuccess), map((action) => action.user), tap((user) => {
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('/');
        })), { dispatch: false });
        this.signUp$ = createEffect(() => this.actions$.pipe(ofType(AuthenticationActions.signUp), map((action) => action.user), switchMap((user) => {
            return this.authenticationService.signUp(user).pipe(map((user) => {
                return AuthenticationActions.signUpSuccess({ user: user, registerMessage: 'Successful registered' });
            }), catchError((error) => {
                return of(AuthenticationActions.signUpFailure({ error: error.error.message }));
            }));
        })));
        this.signOut$ = createEffect(() => this.actions$.pipe(ofType(AuthenticationActions.signOut), tap(() => {
            this.authenticationService.signOut();
            this.router.navigateByUrl('/auth');
        })), { dispatch: false });
    }
};
AuthenticationEffects = __decorate([
    Injectable()
], AuthenticationEffects);
export { AuthenticationEffects };
//# sourceMappingURL=authentication.effects.js.map