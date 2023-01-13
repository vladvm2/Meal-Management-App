import { Meal } from '@app/core';
import { createReducer, on, Action } from '@ngrx/store';
import * as MealActions from '../actions/meals.actions';

export interface MealsState {
    meals: Meal[];
    isLoading: boolean;
    loaded: boolean;
    errorMessage: string;
}

export const initialState: MealsState = {
    meals: [],
    isLoading: false,
    loaded: false,
    errorMessage: ''
}

const reducer = createReducer(
    initialState,
    on(MealActions.loadMeals, (state) => ({
        ...state,
        isLoading: true
    })),
    on(MealActions.loadMealsSuccess, (state, { meals }) => ({
        ...state,
        isLoading: false,
        loaded: true,
        meals: meals
    })),
    on(MealActions.loadMealsFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        loaded: false,
        errorMessage: error
    })),
    on(MealActions.createMealSuccess, (state, { meal }) => ({
        ...state,
        meals: [...state.meals, meal]
    })),
    on(MealActions.createMealFailure, (state, { error }) => ({
        ...state,
        errorMessage: error
    })),
    on(MealActions.updateMealSuccess, (state, { meal }) => ({
        ...state,
        meals: state.meals.map(currentMeal => {
            if (currentMeal.id !== meal.id) {
                return currentMeal;
            }
            return {
                ...currentMeal,
                ...meal
            }
        })
    })),
    on(MealActions.updateMealFailure, (state, { error }) => ({
        ...state,
        errorMessage: error
    })),
    on(MealActions.deleteMealSuccess, (state, { meal }) => ({
        ...state,
        meals: state.meals.filter(m => m.id !== meal.id)
    })),
    on(MealActions.deleteMealFailure, (state, { error }) => ({
        ...state,
        errorMessage: error
    })),
);

export function mealReducer(state: MealsState, action: Action) {
    return reducer(state, action);
}