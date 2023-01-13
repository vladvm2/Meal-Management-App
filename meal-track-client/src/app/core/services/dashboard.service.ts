import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { NGXLogger } from 'ngx-logger';
import { DashboardActionTypes } from '@app/meal/store/actions/dashboard.actions';

@Injectable()
export class DashboardService {
  url = `${environment.apiUrl}statistics`;
  jsonHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient, private logger: NGXLogger) { }

  public getStatistics(): Observable<any> {
    this.logger.info(DashboardActionTypes.LOAD_STATISTICS);

    return this.httpClient.get(this.getUrlWithUserId(), this.jsonHeader);
  }

  private getUrlWithUserId(): string {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const url = `${this.url}/${userId}`;

    return url;
  }
}