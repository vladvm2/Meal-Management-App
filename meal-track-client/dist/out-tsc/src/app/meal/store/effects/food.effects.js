import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FoodActions from '@app/meal/store/actions/food.actions';
let FoodEffects = class FoodEffects {
    constructor(actions$, foodService, imageService) {
        this.actions$ = actions$;
        this.foodService = foodService;
        this.imageService = imageService;
        this.loadFood$ = createEffect(() => this.actions$.pipe(ofType(FoodActions.loadFoods), switchMap(() => {
            return this.foodService.getFoods().pipe(map((data) => {
                data.forEach(food => {
                    food.image = this.imageService.getImageFromBase64String(food.image);
                });
                return FoodActions.loadFoodsSuccess({ foods: data });
            }), catchError(() => of(FoodActions.loadFoodsFailure({ error: 'Server connection failed.' }))));
        })));
    }
};
FoodEffects = __decorate([
    Injectable()
], FoodEffects);
export { FoodEffects };
//# sourceMappingURL=food.effects.js.map