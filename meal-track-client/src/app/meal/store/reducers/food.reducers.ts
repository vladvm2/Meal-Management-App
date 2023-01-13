import { Food } from '@app/core/models/food.model';
import { on, Action } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import * as FoodActions from '../actions/food.actions';

export interface FoodState {
    foods: Food[];
    isLoading: boolean;
    loaded: boolean;
    errorMessage: string
}

const initialState: FoodState = {
    foods: [],
    isLoading: false,
    loaded: false,
    errorMessage: ''
}

const reducer = createReducer(
    initialState,
    on(FoodActions.loadFoods, (state) => ({
        ...state,
        isLoading: true
    })),
    on(FoodActions.loadFoodsSuccess, (state, { foods }) => ({
        ...state,
        foods: foods,
        loaded: true,
        isLoading: false
    })),
    on(FoodActions.loadFoodsFailure, (state, { error }) => ({
        ...state,
        loaded: false,
        errorMessage: error
    }))
);

export function foodReducer(state: FoodState, action: Action) {
    return reducer(state, action);
}