import { User, AuthenticationService } from '@app/core';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { AuthenticationEffects } from './authentication.effects';
import { cold, hot } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';
import {
    signIn,
    signInSuccess,
    signInFailure,
    signUp,
    signUpSuccess,
    signUpFailure,
    update,
    updateSuccess,
    updateFailure
} from "../actions/authentication.actions";


describe('Authentication effects', () => {
    let actions$: Observable<any>;
    let effects: AuthenticationEffects;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                AuthenticationEffects,
                provideMockActions(() => actions$),
                {
                    provide: AuthenticationService,
                    useValue: {
                        signIn: jasmine.createSpy(),
                        signUp: jasmine.createSpy(),
                        update: jasmine.createSpy()
                    }
                }
            ]
        });

        effects = TestBed.get(AuthenticationEffects);
        authenticationService = TestBed.get(AuthenticationService);
    });

    describe('signIn', () => {
        it('should return a stream with sign in success action', () => {
            const user: User = { email: 'email@example.com', password: 'password', fullName: 'full name', image: undefined, token: '' };
            const action = signIn({ user: user });
            const outcome = signInSuccess({ user: user });

            actions$ = hot('-a', { a: action });
            const response = cold('-a|', { a: user });
            authenticationService.signIn.and.returnValue(response);

            const expected = cold('--b', { b: outcome });
            expect(effects.signIn$).toBeObservable(expected);
        });

        it('should return a stream with sign in failure action', () => {
            const user: User = { email: 'email@example.com', password: 'password' };
            const signInAction = signIn({ user: user });
            const error = { error: { message: 'Sign in failure' } }
            const signInFailureAction = signInFailure({ error: error.error.message });

            actions$ = hot('-a|', { a: signInAction });
            const response = cold('-#|', {}, error);
            authenticationService.signIn.and.returnValue(response);

            const expected = cold('--(b|)', { b: signInFailureAction });
            expect(effects.signIn$).toBeObservable(expected);
        });
    });

    describe('signUp', () => {
        it('should return a stream with sign up success action', () => {
            const user: User = { email: 'email@example.com', password: 'password', fullName: 'full name' };
            const signUpAction = signUp({ user: user });
            const successMessage = 'Successful registered';
            const signUpSuccessAction = signUpSuccess({ user: user, registerMessage: successMessage });

            actions$ = hot('-a', { a: signUpAction });
            const response = cold('-a|', { a: user });
            authenticationService.signUp.and.returnValue(response);

            const expectedAction = cold('--b', { b: signUpSuccessAction });
            expect(effects.signUp$).toBeObservable(expectedAction);
        });

        it('should return a stream with sign up failure action', () => {
            const user: User = { email: 'email@example.com', password: 'password', fullName: 'full name' };
            const signUpAction = signUp({ user: user });
            const signUpError = { error: { message: 'Sign up failure' } };
            const signUpFailureAction = signUpFailure({ error: signUpError.error.message });

            actions$ = hot('-a|', { a: signUpAction });
            const response = cold('-#|', {}, signUpError);
            authenticationService.signUp.and.returnValue(response);

            const expectedAction = cold('--(b|)', { b: signUpFailureAction });
            expect(effects.signUp$).toBeObservable(expectedAction);
        });
    });

    describe('update', () => {
        it('should return a stream with update success action', () => {
            const imageFile = {};
            const user: User = { fullName: 'John Doe', email: 'john.doe@email.com', password: '123456' };
            let userFormData = new FormData();
            userFormData.append('file', imageFile as File);
            userFormData.append('user', JSON.stringify(user));
            const updateAction = update({ userData: userFormData });

            const updatedMessage = 'You have successfully updated the profile';
            const updateSuccessAction = updateSuccess({ updatedMessage: updatedMessage, user: user });

            actions$ = hot('-a|', { a: updateAction });
            const response = cold('-a|', { a: user });
            authenticationService.update.and.returnValue(response);

            const expectedAction = cold('--b|', { b: updateSuccessAction });
            expect(effects.update$).toBeObservable(expectedAction);
        });

        it('should return a stream with update failure action', () => {
            const imageFile = {};
            const user: User = { fullName: 'John Doe', email: 'john.doe@email.com', password: '123456' };
            let userFormData = new FormData();
            userFormData.append('file', imageFile as File);
            userFormData.append('user', JSON.stringify(user));
            const updateAction = update({ userData: userFormData });
            const updateError = { error: { message: 'Update failure' } };
            const updateFailureAction = updateFailure({ error: updateError.error.message });

            actions$ = hot('-a|', { a: updateAction });
            const response = cold('-#|', {}, updateError);
            authenticationService.update.and.returnValue(response);

            const expectedAction = cold('--(b|)', { b: updateFailureAction });
            expect(effects.update$).toBeObservable(expectedAction);
        });
    });
});