import { createSelector, createFeatureSelector } from '@ngrx/store';
export const getAuthentication = createFeatureSelector('authentication');
export const getAuthenticationError = createSelector(getAuthentication, (state) => state.errorMessage);
export const getAuthenticationUser = createSelector(getAuthentication, (state) => state.user);
export const getAuthenticationStatus = createSelector(getAuthentication, (state) => state.isAuthenticated);
export const getAuthenticationRegisterMessage = createSelector(getAuthentication, (state) => state.registerMessage);
//# sourceMappingURL=authentication.selectors.js.map