import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let FoodService = class FoodService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = "https://localhost:44316/food";
        this.jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    }
    getFoods() {
        return this.httpClient.get(this.url, this.jsonHeader);
    }
};
FoodService = __decorate([
    Injectable()
], FoodService);
export { FoodService };
//# sourceMappingURL=food.service.js.map