import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule, ChartsModule } from 'angular-bootstrap-md';
import { LoggerModule } from 'ngx-logger';

import { AppComponent } from '@app/app.component';
import { CustomSerializer, PageNotFoundComponent } from '@app/shared';
import { AuthenticationModule } from '@app/authentication/authentication.module';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { MealModule } from '@app/meal/meal.module';
import { environment } from 'environments/environment';


const appRoutes: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule,
    AuthenticationModule,
    MealModule,
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    LoggerModule.forRoot({
      serverLoggingUrl: `${environment.apiUrl}logs`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
