import { createAction, props } from '@ngrx/store'
import { Food } from '@app/core';

export const FoodActionTypes = {
    LOAD_FOODS: '[Food] Load Foods',
    LOAD_FOODS_SUCCESS: '[Food] Load Foods Success',
    LOAD_FOODS_FAILURE: '[Food] Load Foods Failure'
}

export const loadFoods = createAction(FoodActionTypes.LOAD_FOODS);
export const loadFoodsSuccess = createAction(FoodActionTypes.LOAD_FOODS_SUCCESS, props<{ foods: Food[] }>());
export const loadFoodsFailure = createAction(FoodActionTypes.LOAD_FOODS_FAILURE, props<{ error: string }>());