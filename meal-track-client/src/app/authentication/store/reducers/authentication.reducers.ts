import { AuthenticationState } from '@app/authentication/authentication.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as AuthenticationActions from '../actions/authentication.actions'
import { AppState } from '@app/app.state';

export const initialState: AuthenticationState = {
    user: undefined,
    isAuthenticated: false,
    errorMessage: '',
    successMessage: ''
};

const reducer = createReducer(
    initialState,
    on(AuthenticationActions.signInSuccess, (state, { user }) => ({
        ...state,
        user: user,
        isAuthenticated: true,
        errorMessage: ''
    })),
    on(AuthenticationActions.signInFailure, (state, { error }) => ({
        ...state,
        errorMessage: error
    })),
    on(AuthenticationActions.signUpSuccess, (state, { user, registerMessage }) => ({
        ...state,
        errorMessage: '',
        successMessage: registerMessage
    })),
    on(AuthenticationActions.signUpFailure, (state, { error }) => ({
        ...state,
        errorMessage: error,
        successMessage: ''
    })),
    on(AuthenticationActions.signOut, (state) => ({
        ...state,
        user: undefined,
        isAuthenticated: false
    })),
    on(AuthenticationActions.clear, (state) => ({
        ...state,
        user: undefined,
        isAuthenticated: false,
        errorMessage: '',
        successMessage: ''
    })),
    on(AuthenticationActions.updateSuccess, (state, { user, updatedMessage }) => ({
        ...state,
        user: user,
        successMessage: updatedMessage
    })),
    on(AuthenticationActions.updateFailure, (state, { error }) => ({
        ...state,
        errorMessage: error
    })),
    on(AuthenticationActions.clearMessages, (state) => ({
        ...state,
        errorMessage: '',
        successMessage: ''
    }))
);

export function authenticationReducer(state: AuthenticationState, action: Action) {
    return reducer(state, action);
}

export interface State extends AppState {
    authentication: AuthenticationState
}