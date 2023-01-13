import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MealService, Meal } from '@app/core';
import * as MealsActions from '../actions/meals.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MealsEffects {
    constructor(
        private actions$: Actions,
        private mealService: MealService
    ) { }


    loadMeals$ = createEffect(() => this.actions$.pipe(
        ofType(MealsActions.loadMeals),
        switchMap(() => {
            return this.mealService.getMeals().pipe(
                map((data: Meal[]) => {
                    return MealsActions.loadMealsSuccess({ meals: data });
                }),
                catchError(() => of(MealsActions.loadMealsFailure({ error: 'Server connection failed.' }))))
        })));

    createMeal$ = createEffect(() => this.actions$.pipe(
        ofType(MealsActions.createMeal),
        switchMap(({ meal }) => {
            return this.mealService.createMeal(meal).pipe(
                map((data: Meal) => {
                    return MealsActions.createMealSuccess({ meal: data });
                }),
                catchError(() => of(MealsActions.createMealFailure({ error: 'Server connection failed.' }))))
        })));


    updateMeal$ = createEffect(() => this.actions$.pipe(
        ofType(MealsActions.updateMeal),
        switchMap(({ meal }) => {
            return this.mealService.updateMeal(meal).pipe(
                map((data: Meal) => {
                    return MealsActions.updateMealSuccess({ meal: data });
                }),
                catchError(() => of(MealsActions.updateMealFailure({ error: 'Server connection failed.' }))))
        })));

    deleteMeal$ = createEffect(() => this.actions$.pipe(
        ofType(MealsActions.deleteMeal),
        switchMap(({ meal }) => {
            return this.mealService.deleteMeal(meal).pipe(
                map((data: Meal) => {
                    return MealsActions.deleteMealSuccess({ meal: data });
                }),
                catchError(() => of(MealsActions.deleteMealFailure({ error: 'Server connection failed.' }))))
        })));


}