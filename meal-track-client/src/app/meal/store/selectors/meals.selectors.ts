import { createSelector } from '@ngrx/store';
import { getMeal, MealState } from '../meal.state';
import { MealsState } from '../reducers/meals.reducers';

export const getMealState = createSelector(getMeal, (state: MealState) => state.meals);
export const getMeals = createSelector(getMealState, (state: MealsState) => state.meals);
export const getMealIsLoading = createSelector(getMealState, (state: MealsState) => state.isLoading);
export const getMealLoaded = createSelector(getMealState, (state: MealsState) => state.loaded);
export const getMealErrorMessage = createSelector(getMealState, (state: MealsState) => state.errorMessage);