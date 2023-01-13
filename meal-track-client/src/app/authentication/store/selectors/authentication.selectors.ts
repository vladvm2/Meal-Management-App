import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthenticationState } from '@app/authentication/authentication.state';
import { State } from '../reducers/authentication.reducers';

export const getAuthentication = createFeatureSelector<State, AuthenticationState>('authentication');
export const getAuthenticationError = createSelector(getAuthentication, (state: AuthenticationState) => state.errorMessage);
export const getAuthenticationUser = createSelector(getAuthentication, (state: AuthenticationState) => state.user);
export const getAuthenticationStatus = createSelector(getAuthentication, (state: AuthenticationState) => state.isAuthenticated);
export const getAuthenticationSuccess = createSelector(getAuthentication, (state: AuthenticationState) => state.successMessage);
