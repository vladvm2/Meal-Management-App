import { createFeatureSelector } from '@ngrx/store';
import { foodReducer } from './reducers/food.reducers';
import { mealReducer } from './reducers/meals.reducers';
import { InjectionToken } from '@angular/core';
export const mealReducers = new InjectionToken('meal', {
    factory: () => ({
        food: foodReducer,
        meals: mealReducer
    })
});
export const getMeal = createFeatureSelector('meal');
//# sourceMappingURL=meal.state.js.map