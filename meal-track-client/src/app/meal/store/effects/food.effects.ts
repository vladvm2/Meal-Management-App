import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { FoodService, Food, ImageService } from '@app/core';
import * as FoodActions from '@app/meal/store/actions/food.actions';

@Injectable()
export class FoodEffects {
    constructor(
        private actions$: Actions,
        private foodService: FoodService,
        private imageService: ImageService
    ) { }


    loadFood$ = createEffect(() => this.actions$.pipe(
        ofType(FoodActions.loadFoods),
        switchMap(() => {
            return this.foodService.getFoods().pipe(
                map((data: Food[]) => {
                    data.forEach(food => {
                        food.image = this.imageService.getImageFromBase64String(food.image);
                    });
                    return FoodActions.loadFoodsSuccess({ foods: data });
                }),
                catchError(() => of(FoodActions.loadFoodsFailure({ error: 'Server connection failed.' }))))
        })));
}