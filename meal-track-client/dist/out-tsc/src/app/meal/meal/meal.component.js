import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { ProcessedMeal } from '@app/core';
import { loadFoods, getFoods } from '../store';
let MealComponent = class MealComponent {
    constructor(store) {
        this.store = store;
        this.saved = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    ngOnInit() {
        this.getAvailableFoods();
        this.meal = new ProcessedMeal('', '', [], 0);
        this.resetNewFoodPortion();
    }
    onAddFoodPortion() {
        const foodPortion = { food: this.selectedFood, quantity: this.selectedQuantity };
        this.meal.foodPortions.push(foodPortion);
        this.resetNewFoodPortion();
    }
    onDeleteFoodPortion(index) {
        this.meal.foodPortions.splice(index, 1);
    }
    canAddFoodPortion() {
        return this.selectedQuantity && this.selectedQuantity !== 0 && this.selectedFood !== 'Choose food...';
    }
    canSave() {
        return this.meal.foodPortions.length > 0;
    }
    onSave() {
        this.saved.emit(this.meal);
        this.resetNewFoodPortion();
        this.cancelButton.nativeElement.click();
    }
    onCancel() {
        this.cancelled.emit('Cancelled');
        this.resetNewFoodPortion();
    }
    resetNewFoodPortion() {
        this.selectedFood = 'Choose food...';
        this.selectedQuantity = 0;
    }
    getAvailableFoods() {
        this.store.dispatch(loadFoods());
        this.availableFoods$ = this.store.select(getFoods);
    }
};
__decorate([
    Input()
], MealComponent.prototype, "meal", void 0);
__decorate([
    Output()
], MealComponent.prototype, "saved", void 0);
__decorate([
    Output()
], MealComponent.prototype, "cancelled", void 0);
__decorate([
    ViewChild('cancelButton')
], MealComponent.prototype, "cancelButton", void 0);
MealComponent = __decorate([
    Component({
        selector: 'app-meal',
        templateUrl: './meal.component.html',
        styleUrls: ['./meal.component.css']
    })
], MealComponent);
export { MealComponent };
//# sourceMappingURL=meal.component.js.map