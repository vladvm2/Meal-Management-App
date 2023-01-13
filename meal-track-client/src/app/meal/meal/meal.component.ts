import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import {
  Meal,
  FoodPortion,
  Food,
  ProcessedMeal
} from '@app/core';
import { AppState } from '@app/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadFoods, getFoods } from '../store';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() meal: ProcessedMeal;
  @Output() saved = new EventEmitter<Meal>();
  @Output() cancelled = new EventEmitter<any>();
  @ViewChild('cancelButton') cancelButton;

  availableFoods$: Observable<Food[]>;
  selectedFood: any;
  selectedQuantity: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getAvailableFoods();
    this.meal = new ProcessedMeal('', '', [], 0);
    this.resetNewFoodPortion();
  }

  onAddFoodPortion() {
    const foodPortion: FoodPortion = { food: this.selectedFood, quantity: this.selectedQuantity };
    this.meal.foodPortions.push(foodPortion);

    this.resetNewFoodPortion();
  }

  onDeleteFoodPortion(index: number) {
    this.meal.foodPortions.splice(index, 1);
  }

  canAddFoodPortion(): boolean {
    return this.selectedQuantity && this.selectedQuantity !== 0 && this.selectedFood !== 'Choose food...';
  }

  canSave(): boolean {
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
}