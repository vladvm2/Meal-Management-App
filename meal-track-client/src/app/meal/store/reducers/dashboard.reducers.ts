import { Statistics } from '@app/core';
import { createReducer, on, Action } from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';

export interface DashboardState {
    statistics: Statistics;
    errorMessage: string;
}

const initialState: DashboardState = {
    statistics: null,
    errorMessage: ''
}

const reducer = createReducer(
    initialState,
    on(DashboardActions.loadStatisticsSuccess, (state, { statistics }) => ({
        ...state,
        statistics: statistics
    })),
    on(DashboardActions.loadStatisticsFailure, (state, { error }) => ({
        ...state,
        errorMessage: error
    }))
);

export function dashboardReducer(state: DashboardState, action: Action) {
    return reducer(state, action);
}