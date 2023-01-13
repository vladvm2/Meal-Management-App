import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import * as FoodActions from '../actions/food.actions';
const initialState = {
    foods: [],
    isLoading: false,
    loaded: false,
    errorMessage: ''
};
const reducer = createReducer(initialState, on(FoodActions.loadFoods, (state) => (Object.assign(Object.assign({}, state), { isLoading: true }))), on(FoodActions.loadFoodsSuccess, (state, { foods }) => (Object.assign(Object.assign({}, state), { foods: foods, loaded: true, isLoading: false }))), on(FoodActions.loadFoodsFailure, (state, { error }) => (Object.assign(Object.assign({}, state), { loaded: false, errorMessage: error }))));
export function foodReducer(state, action) {
    return reducer(state, action);
}
//# sourceMappingURL=food.reducers.js.map