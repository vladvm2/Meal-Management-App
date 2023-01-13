import { Store } from "@ngrx/store";
import { AppState } from '@app/app.state';
import { signIn, signUp, signOut, update, clear, clearMessages } from './authentication.actions';

describe('Authentication actions', () => {
    it('should dispatch sign in action', () => {
        const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);
        const expectedAction = signIn;

        store.dispatch(signIn);

        expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch sign up action', () => {
        const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);
        const expectedAction = signUp;

        store.dispatch(signUp);

        expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch sign out action', () => {
        const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);
        const expectedAction = signOut;

        store.dispatch(signOut);

        expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch update action', () => {
        const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);
        const expectedAction = update;

        store.dispatch(update);

        expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch clear action', () => {
        const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);
        const expectedAction = clear;

        store.dispatch(clear);

        expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch clear messages action', () => {
        const store = jasmine.createSpyObj<Store<AppState>>('store', ['dispatch']);
        const expectedAction = clearMessages;

        store.dispatch(clearMessages);

        expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
});