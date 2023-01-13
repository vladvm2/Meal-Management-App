import { Component, OnInit } from '@angular/core';
import {
  Meal,
  ProcessedMeal
} from '@app/core';
import { Observable } from 'rxjs';
import { AppState } from '@app/app.state';
import { Store } from '@ngrx/store';
import * as MealsActions from '@app/meal/store/actions/meals.actions';
import { getMeals } from '@app/meal/store/selectors/meals.selectors';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  processingMeal: ProcessedMeal;
  meals$: Observable<Meal[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getMeals();
  }

  saved(meal: ProcessedMeal) {
    if (meal.id == '') {
      this.store.dispatch(MealsActions.createMeal({ meal: meal }));
    } else {
      this.store.dispatch(MealsActions.updateMeal({ meal: meal }));
    }
  }

  cancelled(notification: any) {
    this.setProcessingMeal(null);
  }

  onDelete(meal: Meal) {
    this.store.dispatch(MealsActions.deleteMeal({ meal: meal }));
  }

  onEdit(meal: Meal) {
    this.setProcessingMeal(meal);
  }

  onCreate() {
    this.setProcessingMeal(null);
  }

  setProcessingMeal(meal: Meal) {
    if (meal == null) {
      this.processingMeal = new ProcessedMeal('', '', [], 0);
    } else {
      this.processingMeal = new ProcessedMeal(meal.id, meal.title, JSON.parse(JSON.stringify(meal.foodPortions)), meal.calories);
    }
  }

  getMeals() {
    this.store.dispatch(MealsActions.loadMeals());
    this.meals$ = this.store.select(getMeals);
  }
}