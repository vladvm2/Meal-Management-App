import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal.model';
import { environment } from 'environments/environment';
import { NGXLogger } from 'ngx-logger';
import { MealActionTypes } from '@app/meal/store/actions/meals.actions';

@Injectable()
export class MealService {
  url = `${environment.apiUrl}meals`;
  jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient, private logger: NGXLogger) { }

  getMeals(): Observable<Meal[]> {
    this.logger.info(MealActionTypes.LOAD_MEALS);

    return this.httpClient.get<Meal[]>(this.getUrlWithUserId(), this.jsonHeader);
  }

  createMeal(meal: Meal): Observable<any> {
    this.logger.info(MealActionTypes.CREATE_MEAL, meal);

    return this.httpClient.post(this.getUrlWithUserId(), meal, this.jsonHeader);
  }

  updateMeal(meal: Meal): Observable<any> {
    this.logger.info(MealActionTypes.UPDATE_MEAL, meal);

    return this.httpClient.put(this.getUrlWithUserId(), meal, this.jsonHeader);
  }

  deleteMeal(meal: Meal): Observable<any> {
    const mealUrl = `${this.url}/${meal.id}`;

    this.logger.info(MealActionTypes.DELETE_MEAL, meal);

    return this.httpClient.delete(mealUrl);
  }

  private getUrlWithUserId() {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const url = `${this.url}/${userId}`;

    return url;
  }
}
