import { Component, OnInit } from '@angular/core';
import { Chart } from '@app/core';
import { AppState } from '@app/app.state';
import { Store } from '@ngrx/store';
import { loadStatistics } from '../store/actions/dashboard.actions';
import { Observable } from 'rxjs';
import {
  getChartSettings
} from '@app/meal/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartSettings$: Observable<any>;
  chart: Chart;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chart = new Chart();
    this.initializeChart();
    this.loadStatistics();
  }

  loadStatistics() {
    this.store.dispatch(loadStatistics());
    this.chartSettings$ = this.store.select(getChartSettings);
    this.chartSettings$.subscribe(settings => {
      this.chart.dataSets = settings.dataSets;
      this.chart.options = settings.options;
      this.initializeChart();
    })
  }

  initializeChart() {
    this.chart.type = 'bar';
    this.chart.labels = ['Protein', 'Fats', 'Carbs'];
    this.chart.colors = [
      {
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2,
      }
    ];
  }
}