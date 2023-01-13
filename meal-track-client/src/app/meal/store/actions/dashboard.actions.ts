import { createAction, props } from '@ngrx/store';
import { Statistics } from '@app/core';

export const DashboardActionTypes = {
    LOAD_STATISTICS: '[Dashboard] Load Statistics',
    LOAD_STATISTICS_SUCCESS: '[Dashboard] Load Statistics Success',
    LOAD_STATISTICS_FAILURE: '[Dashboard] Load Statistics Failure'
};

export const loadStatistics = createAction(DashboardActionTypes.LOAD_STATISTICS);
export const loadStatisticsSuccess = createAction(DashboardActionTypes.LOAD_STATISTICS_SUCCESS, props<{ statistics: Statistics }>());
export const loadStatisticsFailure = createAction(DashboardActionTypes.LOAD_STATISTICS_FAILURE, props<{ error: string }>());