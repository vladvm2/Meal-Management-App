import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ProcessedMeal } from '@app/core';
import * as MealsActions from '@app/meal/store/actions/meals.actions';
import { getMeals } from '@app/meal/store/selectors/meals.selectors';
let MealListComponent = class MealListComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.getMeals();
    }
    saved(meal) {
        if (meal.id == '') {
            this.store.dispatch(MealsActions.createMeal({ meal: meal }));
        }
        else {
            this.store.dispatch(MealsActions.updateMeal({ meal: meal }));
        }
    }
    cancelled(notification) {
        this.setProcessingMeal(null);
    }
    onDelete(meal) {
        this.store.dispatch(MealsActions.deleteMeal({ meal: meal }));
    }
    onEdit(meal) {
        this.setProcessingMeal(meal);
    }
    onCreate() {
        this.setProcessingMeal(null);
    }
    setProcessingMeal(meal) {
        if (meal == null) {
            this.processingMeal = new ProcessedMeal('', '', [], 0);
        }
        else {
            this.processingMeal = new ProcessedMeal(meal.id, meal.title, JSON.parse(JSON.stringify(meal.foodPortions)), meal.calories);
        }
    }
    getMeals() {
        this.store.dispatch(MealsActions.loadMeals());
        this.meals$ = this.store.select(getMeals);
    }
};
MealListComponent = __decorate([
    Component({
        selector: 'app-meal-list',
        templateUrl: './meal-list.component.html',
        styleUrls: ['./meal-list.component.css']
    })
], MealListComponent);
export { MealListComponent };
//# sourceMappingURL=meal-list.component.js.map