import { createAction, props } from '@ngrx/store';
import { Meal } from '@app/core';

export const MealActionTypes = {
    LOAD_MEALS: '[Meal] Load',
    LOAD_MEALS_SUCCESS: '[Meal] Load Success',
    LOAD_MEALS_FAILURE: '[Meal] Load Failure',
    CREATE_MEAL: '[Meal] Create',
    CREATE_MEAL_SUCCESS: '[Meal] Create Success',
    CREATE_MEAL_FAILURE: '[Meal] Create Failure',
    UPDATE_MEAL: '[Meal] Update',
    UPDATE_MEAL_SUCCESS: '[Meal] Update Success',
    UPDATE_MEAL_FAILURE: '[Meal] Update Failure',
    DELETE_MEAL: '[Meal] Delete',
    DELETE_MEAL_SUCCESS: '[Meal] Delete Success',
    DELETE_MEAL_FAILURE: '[Meal] Delete Failure'
};

export const loadMeals = createAction(MealActionTypes.LOAD_MEALS);
export const loadMealsSuccess = createAction(MealActionTypes.LOAD_MEALS_SUCCESS, props<{ meals: Meal[] }>());
export const loadMealsFailure = createAction(MealActionTypes.LOAD_MEALS_FAILURE, props<{ error: string }>());

export const createMeal = createAction(MealActionTypes.CREATE_MEAL, props<{ meal: Meal }>());
export const createMealSuccess = createAction(MealActionTypes.CREATE_MEAL_SUCCESS, props<{ meal: Meal }>());
export const createMealFailure = createAction(MealActionTypes.CREATE_MEAL_FAILURE, props<{ error: string }>());

export const updateMeal = createAction(MealActionTypes.UPDATE_MEAL, props<{ meal: Meal }>());
export const updateMealSuccess = createAction(MealActionTypes.UPDATE_MEAL_SUCCESS, props<{ meal: Meal }>());
export const updateMealFailure = createAction(MealActionTypes.UPDATE_MEAL_FAILURE, props<{ error: string }>());

export const deleteMeal = createAction(MealActionTypes.DELETE_MEAL, props<{ meal: Meal }>());
export const deleteMealSuccess = createAction(MealActionTypes.DELETE_MEAL_SUCCESS, props<{ meal: Meal }>());
export const deleteMealFailure = createAction(MealActionTypes.DELETE_MEAL_FAILURE, props<{ error: string }>());