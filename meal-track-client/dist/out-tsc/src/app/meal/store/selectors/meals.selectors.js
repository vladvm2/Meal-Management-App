import { createSelector } from '@ngrx/store';
import { getMeal } from '../meal.state';
export const getMealState = createSelector(getMeal, (state) => state.meals);
export const getMeals = createSelector(getMealState, (state) => state.meals);
export const getMealIsLoading = createSelector(getMealState, (state) => state.isLoading);
export const getMealLoaded = createSelector(getMealState, (state) => state.loaded);
export const getMealErrorMessage = createSelector(getMealState, (state) => state.errorMessage);
//# sourceMappingURL=meals.selectors.js.map