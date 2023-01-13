import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChartsModule } from 'angular-bootstrap-md';

import {
  LayoutComponent,
  FoodComponent,
  DashboardComponent,
  FoodItemComponent,
  MealListComponent,
  FoodEffects,
  MealsEffects,
  DashboardEffects,
  mealReducers
} from '@app/meal';
import { SharedModule } from '@app/shared/shared.module';
import { AuthenticationGuard } from '@app/core';
import { MealComponent } from './meal/meal.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const mealRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'food', component: FoodComponent },
      { path: 'meal', component: MealListComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
]


@NgModule({
  declarations: [
    LayoutComponent,
    FoodComponent,
    DashboardComponent,
    FoodItemComponent,
    MealListComponent,
    MealComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    RouterModule.forChild(mealRoutes),
    StoreModule.forFeature('meal', mealReducers),
    EffectsModule.forFeature([
      FoodEffects,
      MealsEffects,
      DashboardEffects
    ])
  ]
})
export class MealModule { }
