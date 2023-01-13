import { createReducer, on } from '@ngrx/store';
import * as AuthenticationActions from '../actions/authentication.actions';
const initialState = {
    user: undefined,
    isAuthenticated: false,
    errorMessage: '',
    registerMessage: ''
};
const reducer = createReducer(initialState, on(AuthenticationActions.signInSuccess, (state, { user }) => (Object.assign(Object.assign({}, state), { user: user, isAuthenticated: true, errorMessage: null }))), on(AuthenticationActions.signInFailure, (state, { error }) => (Object.assign(Object.assign({}, state), { errorMessage: error }))), on(AuthenticationActions.signUpSuccess, (state, { user, registerMessage }) => (Object.assign(Object.assign({}, state), { errorMessage: null, registerMessage: registerMessage }))), on(AuthenticationActions.signUpFailure, (state, { error }) => (Object.assign(Object.assign({}, state), { errorMessage: error, registerMessage: null }))), on(AuthenticationActions.signOut, (state) => (Object.assign(Object.assign({}, state), { user: null, isAuthenticated: false }))), on(AuthenticationActions.clear, (state) => (Object.assign(Object.assign({}, state), { user: null, isAuthenticated: false, errorMessage: null, registerMessage: null }))));
export function authenticationReducer(state, action) {
    return reducer(state, action);
}
//# sourceMappingURL=authentication.reducers.js.map