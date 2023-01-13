import { __decorate, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthenticationService, FoodService, ImageService, MealService } from '@app/core';
let CoreModule = class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
};
CoreModule = __decorate([
    NgModule({
        providers: [
            AuthenticationService,
            FoodService,
            ImageService,
            MealService
        ]
    }),
    __param(0, Optional()), __param(0, SkipSelf())
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map