import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let MealService = class MealService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = "https://localhost:44316/meals";
        this.jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    }
    getMeals() {
        return this.httpClient.get(this.url, this.jsonHeader);
    }
    createMeal(meal) {
        return this.httpClient.post(this.url, meal, this.jsonHeader);
    }
    updateMeal(meal) {
        return this.httpClient.put(this.url, meal, this.jsonHeader);
    }
    deleteMeal(meal) {
        const mealUrl = this.url + '/' + meal.id;
        return this.httpClient.delete(mealUrl);
    }
};
MealService = __decorate([
    Injectable()
], MealService);
export { MealService };
//# sourceMappingURL=meal.service.js.map