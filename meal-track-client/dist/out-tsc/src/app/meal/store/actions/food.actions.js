import { createAction, props } from '@ngrx/store';
export const FoodActionTypes = {
    LOAD_FOODS: '[Food] Load Foods',
    LOAD_FOODS_SUCCESS: '[Food] Load Foods Success',
    LOAD_FOODS_FAILURE: '[Food] Load Foods Failure'
};
export const loadFoods = createAction(FoodActionTypes.LOAD_FOODS);
export const loadFoodsSuccess = createAction(FoodActionTypes.LOAD_FOODS_SUCCESS, props());
export const loadFoodsFailure = createAction(FoodActionTypes.LOAD_FOODS_FAILURE, props());
//# sourceMappingURL=food.actions.js.map