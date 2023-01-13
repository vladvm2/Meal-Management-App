import { createSelector } from '@ngrx/store';
import { getMeal } from '../meal.state';
export const getFood = createSelector(getMeal, (state) => state.food);
export const getFoods = createSelector(getFood, (state) => state.foods);
export const getFoodIsLoading = createSelector(getFood, (state) => state.isLoading);
export const getFoodLoaded = createSelector(getFood, (state) => state.loaded);
export const getFoodErrorMessage = createSelector(getFood, (state) => state.errorMessage);
//# sourceMappingURL=food.selectors.js.map