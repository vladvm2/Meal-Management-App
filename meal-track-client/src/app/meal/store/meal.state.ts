import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { FoodState, foodReducer } from '@app/meal/store/reducers/food.reducers';
import { MealsState, mealReducer } from '@app/meal/store/reducers/meals.reducers';
import { DashboardState, dashboardReducer } from '@app/meal/store/reducers/dashboard.reducers';
import { AppState } from '@app/app.state';


export interface MealState {
    dashboard: DashboardState,
    food: FoodState,
    meals: MealsState
}

export const mealReducers = new InjectionToken<ActionReducerMap<MealState>>('meal', {
    factory: () => ({
        dashboard: dashboardReducer,
        food: foodReducer,
        meals: mealReducer
    })
})

export interface State extends AppState {
    meal: MealState;
}

export const getMeal = createFeatureSelector<State, MealState>('meal');