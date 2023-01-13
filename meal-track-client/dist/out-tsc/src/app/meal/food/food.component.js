import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { getFoods, loadFoods } from '@app/meal/store';
let FoodComponent = class FoodComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.getFoods();
        this.foods$ = this.store.select(getFoods);
    }
    getFoods() {
        this.store.dispatch(loadFoods());
    }
};
FoodComponent = __decorate([
    Component({
        selector: 'app-food',
        templateUrl: './food.component.html',
        styleUrls: ['./food.component.css']
    })
], FoodComponent);
export { FoodComponent };
//# sourceMappingURL=food.component.js.map