import { createSelector } from '@ngrx/store';
import { MealState, getMeal } from '../meal.state';
import { FoodState } from '../reducers/food.reducers';

export const getFood = createSelector(getMeal, (state: MealState) => state.food);
export const getFoods = createSelector(getFood, (state: FoodState) => state.foods);
export const getFoodIsLoading = createSelector(getFood, (state: FoodState) => state.isLoading);
export const getFoodLoaded = createSelector(getFood, (state: FoodState) => state.loaded);
export const getFoodErrorMessage = createSelector(getFood, (state: FoodState) => state.errorMessage);