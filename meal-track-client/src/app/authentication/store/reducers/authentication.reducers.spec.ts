import { authenticationReducer } from "./authentication.reducers";
import { initialState } from './authentication.reducers';
import { User } from '@app/core';
import { AuthenticationState } from '@app/authentication/authentication.state';
import {
    signInSuccess,
    signInFailure,
    signUpSuccess,
    signUpFailure,
    signOut,
    clear,
    clearMessages,
    updateSuccess,
    updateFailure
} from '../actions/authentication.actions';

describe('Authentication reducer', () => {
    it('should return user authenticated when sign in success', () => {
        const user: User = { email: 'email@example.com', password: 'password', fullName: 'full name', image: undefined, token: '' };
        const nextState = authenticationReducer(initialState, signInSuccess({ user: user }));

        expect(nextState.user).toBe(user);
        expect(nextState.isAuthenticated).toBeTrue();
    });

    it('should return error when sign in failure', () => {
        const message = 'Error occurred';
        const nextState = authenticationReducer(initialState, signInFailure({ error: message }));

        expect(nextState.errorMessage).toBe(message);
    });

    it('should return success message when sign up success', () => {
        const message = 'Successful message';
        const nextState = authenticationReducer(initialState, signUpSuccess({ registerMessage: message, user: null }));

        expect(nextState.successMessage).toBe(message);
    });

    it('should return error when sign up failure', () => {
        const message = 'Error occurred';
        const nextState = authenticationReducer(initialState, signUpFailure({ error: message }));

        expect(nextState.errorMessage).toBe(message);
    });

    it('should remove user,authenticated when sign out', () => {
        const user: User = { email: 'email@example.com', password: 'password', fullName: 'full name', image: undefined, token: '' };
        const actualState: AuthenticationState = {
            user: user,
            errorMessage: '',
            isAuthenticated: true,
            successMessage: ''
        };

        const nextState = authenticationReducer(actualState, signOut());

        expect(nextState.user).toBeUndefined();
        expect(nextState.isAuthenticated).toBeFalse();
    });

    it('should return initial state when clear', () => {
        const user: User = { email: 'email@example.com', password: 'password', fullName: 'full name', image: undefined, token: '' };
        const actualState: AuthenticationState = {
            user: user,
            errorMessage: '',
            isAuthenticated: true,
            successMessage: ''
        };
        const nextState = authenticationReducer(actualState, clear());

        expect(nextState).toEqual(initialState);
    });

    it('should clear the messages when clear messages', () => {
        const actualState: AuthenticationState = {
            user: undefined,
            errorMessage: 'Error occurred',
            isAuthenticated: false,
            successMessage: '',
        };

        const nextState = authenticationReducer(actualState, clearMessages);

        expect(nextState.errorMessage).toEqual('');
        expect(nextState.successMessage).toEqual('');
    });

    it('should return user,update message when update success', () => {
        const currentUser: User = { email: 'email@example.com', password: 'password', fullName: 'full name', image: undefined, token: '' };
        const actualState: AuthenticationState = {
            user: currentUser,
            errorMessage: '',
            isAuthenticated: true,
            successMessage: '',
        }
        const updatedUser: User = { email: 'email@example.com', password: 'password_updated', fullName: 'full name', image: undefined, token: '' };
        const successMessage = 'Successful updated';

        const nextState = authenticationReducer(actualState, updateSuccess({ updatedMessage: successMessage, user: updatedUser }));

        expect(nextState.successMessage).toEqual(successMessage);
        expect(nextState.user).toEqual(updatedUser);
    });

    it('should return error when update failure', () => {
        const currentUser: User = { email: 'email@example.com', password: 'password', fullName: 'full name', image: undefined, token: '' };
        const actualState: AuthenticationState = {
            user: currentUser,
            errorMessage: '',
            isAuthenticated: true,
            successMessage: '',
        }
        const errorMessage = 'Error occurred';

        const nextState = authenticationReducer(actualState, updateFailure({ error: errorMessage }));

        expect(nextState).toEqual({ ...actualState, errorMessage });
    });
});