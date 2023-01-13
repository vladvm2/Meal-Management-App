import { createAction, props } from '@ngrx/store';
import { User } from '@app/core';

export enum AuthenticationActionTypes {
    SIGN_IN = '[Authentication] Sign in',
    SIGN_IN_SUCCESS = '[Authentication] Sign in Success',
    SIGN_IN_FAILURE = '[Authentication] Sign in Failure',
    CHECK_SIGNED_IN = '[Authentication] Check signed in',
    CHECK_SIGNED_IN_SUCCESS = '[Authentication] Check signed in success',
    SIGN_UP = '[Authentication] Sign up',
    SIGN_UP_SUCCESS = '[Authentication] Sign up Success',
    SIGN_UP_FAILURE = '[Authentication] Sign up Failure',
    SIGN_OUT = '[Authentication] Sign out',
    CLEAR = '[Authentication] Clear',
    UPDATE = '[Authentication] Update',
    UPDATE_SUCCESS = '[Authentication] Update Success',
    UPDATE_FAILURE = '[Authentication] Update Failure',
    CLEAR_MESSAGES = '[Authentication] Clear messages'
};

export const signIn = createAction(AuthenticationActionTypes.SIGN_IN, props<{ user: User }>());
export const signInSuccess = createAction(AuthenticationActionTypes.SIGN_IN_SUCCESS, props<{ user: User }>());
export const signInFailure = createAction(AuthenticationActionTypes.SIGN_IN_FAILURE, props<{ error: string }>());
export const signUp = createAction(AuthenticationActionTypes.SIGN_UP, props<{ user: User }>());
export const signUpSuccess = createAction(AuthenticationActionTypes.SIGN_UP_SUCCESS, props<{ user: User, registerMessage: string }>());
export const signUpFailure = createAction(AuthenticationActionTypes.SIGN_UP_FAILURE, props<{ error: string }>());
export const signOut = createAction(AuthenticationActionTypes.SIGN_OUT);
export const clear = createAction(AuthenticationActionTypes.CLEAR);
export const update = createAction(AuthenticationActionTypes.UPDATE, props<{ userData: any }>());
export const updateSuccess = createAction(AuthenticationActionTypes.UPDATE_SUCCESS, props<{ user: User, updatedMessage: string }>());
export const updateFailure = createAction(AuthenticationActionTypes.UPDATE_FAILURE, props<{ error: string }>());
export const clearMessages = createAction(AuthenticationActionTypes.CLEAR_MESSAGES);