import { createAction, props } from '@ngrx/store';
export var AuthenticationActionTypes;
(function (AuthenticationActionTypes) {
    AuthenticationActionTypes["SIGN_IN"] = "[Authentication] Sign in";
    AuthenticationActionTypes["SIGN_IN_SUCCESS"] = "[Authentication] Sign in Success";
    AuthenticationActionTypes["SIGN_IN_FAILURE"] = "[Authentication] Sign in Failure";
    AuthenticationActionTypes["CHECK_SIGNED_IN"] = "[Authentication] Check signed in";
    AuthenticationActionTypes["CHECK_SIGNED_IN_SUCCESS"] = "[Authentication] Check signed in success";
    AuthenticationActionTypes["SIGN_UP"] = "[Authentication] Sign up";
    AuthenticationActionTypes["SIGN_UP_SUCCESS"] = "[Authentication] Sign up Success";
    AuthenticationActionTypes["SIGN_UP_FAILURE"] = "[Authentication] Sign up Failure";
    AuthenticationActionTypes["SIGN_OUT"] = "[Authentication] Sign out";
    AuthenticationActionTypes["CLEAR"] = "[Authentication] Clear";
})(AuthenticationActionTypes || (AuthenticationActionTypes = {}));
export const signIn = createAction(AuthenticationActionTypes.SIGN_IN, props());
export const signInSuccess = createAction(AuthenticationActionTypes.SIGN_IN_SUCCESS, props());
export const signInFailure = createAction(AuthenticationActionTypes.SIGN_IN_FAILURE, props());
export const signUp = createAction(AuthenticationActionTypes.SIGN_UP, props());
export const signUpSuccess = createAction(AuthenticationActionTypes.SIGN_UP_SUCCESS, props());
export const signUpFailure = createAction(AuthenticationActionTypes.SIGN_UP_FAILURE, props());
export const signOut = createAction(AuthenticationActionTypes.SIGN_OUT);
export const clear = createAction(AuthenticationActionTypes.CLEAR);
//# sourceMappingURL=authentication.actions.js.map