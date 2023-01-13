import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '@app/app.component';
import { CustomSerializer, PageNotFoundComponent } from '@app/shared';
import { AuthenticationModule } from '@app/authentication/authentication.module';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { MealModule } from '@app/meal/meal.module';
const appRoutes = [
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
        ],
        imports: [
            BrowserModule,
            CoreModule,
            SharedModule,
            HttpClientModule,
            AuthenticationModule,
            MealModule,
            RouterModule.forRoot(appRoutes),
            EffectsModule.forRoot([]),
            StoreModule.forRoot({}),
            StoreDevtoolsModule.instrument({ maxAge: 25 }),
            StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map