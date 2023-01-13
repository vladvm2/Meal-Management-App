import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService, Statistics } from '@app/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as DashboardActions from '../actions/dashboard.actions';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {
    constructor(
        private actions$: Actions,
        private dashboardService: DashboardService
    ) { }

    loadStatistics$ = createEffect(() => this.actions$.pipe(
        ofType(DashboardActions.loadStatistics),
        switchMap(() => {
            return this.dashboardService.getStatistics().pipe(
                map((data: Statistics) => {
                    return DashboardActions.loadStatisticsSuccess({ statistics: data });
                }),
                catchError(() => of(DashboardActions.loadStatisticsFailure({ error: 'Server connection failed.' }))))
        })));
}