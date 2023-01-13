import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food.model';
import { environment } from 'environments/environment';
import { NGXLogger } from 'ngx-logger';
import { FoodActionTypes } from '@app/meal/store/actions/food.actions';

@Injectable()
export class FoodService {
  url = `${environment.apiUrl}food`;
  jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient, private logger: NGXLogger) { }

  getFoods(): Observable<Food[]> {
    this.logger.info(FoodActionTypes.LOAD_FOODS);

    return this.httpClient.get<Food[]>(this.url, this.jsonHeader);
  }
}