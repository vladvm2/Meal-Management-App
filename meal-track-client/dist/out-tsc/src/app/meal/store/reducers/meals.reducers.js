import { createReducer, on } from '@ngrx/store';
import * as MealActions from '../actions/meals.actions';
export const initialState = {
    meals: [],
    isLoading: false,
    loaded: false,
    errorMessage: ''
};
const reducer = createReducer(initialState, on(MealActions.loadMeals, (state) => (Object.assign(Object.assign({}, state), { isLoading: true }))), on(MealActions.loadMealsSuccess, (state, { meals }) => (Object.assign(Object.assign({}, state), { isLoading: false, loaded: true, meals: meals }))), on(MealActions.loadMealsFailure, (state, { error }) => (Object.assign(Object.assign({}, state), { isLoading: false, loaded: false, errorMessage: error }))), on(MealActions.createMealSuccess, (state, { meal }) => (Object.assign(Object.assign({}, state), { meals: [...state.meals, meal] }))), on(MealActions.createMealFailure, (state, { error }) => (Object.assign(Object.assign({}, state), { errorMessage: error }))), on(MealActions.updateMealSuccess, (state, { meal }) => (Object.assign(Object.assign({}, state), { meals: state.meals.map(currentMeal => {
        if (currentMeal.id !== meal.id) {
            return currentMeal;
        }
        return Object.assign(Object.assign({}, currentMeal), meal);
    }) }))), on(MealActions.updateMealFailure, (state, { error }) => (Object.assign(Object.assign({}, state), { errorMessage: error }))), on(MealActions.deleteMealSuccess, (state, { meal }) => (Object.assign(Object.assign({}, state), { meals: state.meals.filter(m => m.id !== meal.id) }))), on(MealActions.deleteMealFailure, (state, { error }) => (Object.assign(Object.assign({}, state), { errorMessage: error }))));
export function mealReducer(state, action) {
    return reducer(state, action);
}
//# sourceMappingURL=meals.reducers.js.map