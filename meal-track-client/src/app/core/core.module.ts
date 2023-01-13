import { NgModule, Optional, SkipSelf } from '@angular/core';

import {
  AuthenticationService,
  FoodService,
  ImageService,
  MealService,
  DashboardService
} from '@app/core';

@NgModule({
  providers: [
    AuthenticationService,
    FoodService,
    ImageService,
    MealService,
    DashboardService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}