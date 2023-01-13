import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { createEffect, ofType } from '@ngrx/effects';
import * as MealsActions from '../actions/meals.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
let MealsEffects = class MealsEffects {
    constructor(actions$, mealService) {
        this.actions$ = actions$;
        this.mealService = mealService;
        this.loadMeals$ = createEffect(() => this.actions$.pipe(ofType(MealsActions.loadMeals), switchMap(() => {
            return this.mealService.getMeals().pipe(map((data) => {
                return MealsActions.loadMealsSuccess({ meals: data });
            }), catchError(() => of(MealsActions.loadMealsFailure({ error: 'Server connection failed.' }))));
        })));
        this.createMeal$ = createEffect(() => this.actions$.pipe(ofType(MealsActions.createMeal), switchMap(({ meal }) => {
            return this.mealService.createMeal(meal).pipe(map((data) => {
                return MealsActions.createMealSuccess({ meal: data });
            }), catchError(() => of(MealsActions.createMealFailure({ error: 'Server connection failed.' }))));
        })));
        this.updateMeal$ = createEffect(() => this.actions$.pipe(ofType(MealsActions.updateMeal), switchMap(({ meal }) => {
            return this.mealService.updateMeal(meal).pipe(map((data) => {
                return MealsActions.updateMealSuccess({ meal: data });
            }), catchError(() => of(MealsActions.updateMealFailure({ error: 'Server connection failed.' }))));
        })));
        this.deleteMeal$ = createEffect(() => this.actions$.pipe(ofType(MealsActions.deleteMeal), switchMap(({ meal }) => {
            return this.mealService.deleteMeal(meal).pipe(map((data) => {
                return MealsActions.deleteMealSuccess({ meal: data });
            }), catchError(() => of(MealsActions.deleteMealFailure({ error: 'Server connection failed.' }))));
        })));
    }
};
MealsEffects = __decorate([
    Injectable()
], MealsEffects);
export { MealsEffects };
//# sourceMappingURL=meals.effects.js.map