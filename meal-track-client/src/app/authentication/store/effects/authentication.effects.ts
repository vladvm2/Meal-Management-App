import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthenticationService, User } from '@app/core';
import * as AuthenticationActions from '@app/authentication/store/actions/authentication.actions';



@Injectable()
export class AuthenticationEffects {
    constructor(
        private actions$: Actions,
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    signIn$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.signIn),
        switchMap(({ user }) => {
            return this.authenticationService.signIn(user.email, user.password).pipe(
                map((user: User) => {
                    return AuthenticationActions.signInSuccess({ user: user });
                }),
                catchError((error) => {
                    return of(AuthenticationActions.signInFailure({ error: error.error.message }));
                }));
        })));

    signInSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.signInSuccess),
        map((action) => action.user),
        tap((user: User) => {
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('/');
        })
    ), { dispatch: false });

    signUp$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.signUp),
        switchMap(({ user }) => {
            return this.authenticationService.signUp(user).pipe(
                map((user: User) => {
                    return AuthenticationActions.signUpSuccess({ user: user, registerMessage: 'Successful registered' });
                }),
                catchError((error) => {
                    return of(AuthenticationActions.signUpFailure({ error: error.error.message }));
                }));
        })));

    signOut$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.signOut),
        tap(() => {
            this.authenticationService.signOut();
            this.router.navigateByUrl('/auth');
        })), { dispatch: false });


    update$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.update),
        switchMap(({ userData }) => {
            return this.authenticationService.update(userData).pipe(
                map((user: User) => {
                    const currentUser = JSON.parse(localStorage.getItem('user')) as User;
                    const updatedUser = {
                        ...currentUser,
                        email: user.email,
                        fullName: user.fullName,
                        image: user.image
                    };
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                    return AuthenticationActions.updateSuccess({ user: user, updatedMessage: 'You have successfully updated the profile' });
                }),
                catchError((error) => {
                    return of(AuthenticationActions.updateFailure({ error: error.error.message }));
                }));
        })));
}