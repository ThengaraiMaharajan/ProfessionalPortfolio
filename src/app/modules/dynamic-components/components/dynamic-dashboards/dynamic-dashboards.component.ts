import { Component , ChangeDetectorRef} from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dynamic-dashboards',
  templateUrl: './dynamic-dashboards.component.html',
  styleUrl: './dynamic-dashboards.component.css'
})
export class DynamicDashboardsComponent {

  // response var
  chart: any = new Chart;
  dashData: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  // life cycle segment
  ngOnInit(): void {
    // initial method call segment
    this.getData();
  }

  // initial methods declaration segment
  getData() {

    let alldashData = [
      {
        updatedTime: '2025-02-27T06:11:23.16',
        dashboardReportID: '9bd24423-9126-4cba-df23-1d31ec4fc9f7',
        dashboardID: '23232323-d285-4612-b102-c665519d618b',
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Car Sales by Brand',
        },
        xAxis: {
          categories: ['Toyota', 'Ford', 'BMW', 'Tesla', 'Honda'],
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Total Car Sales',
          },
        },
        legend: {
          reversed: true,
        },
        plotOptions: {
          series: {
            stacking: 'normal',
          },
        },
        series: [
          {
            name: 'Q1 2025',
            data: [5000, 3000, 4000, 7000, 2000],
          },
          {
            name: 'Q2 2025',
            data: [2000, 2000, 3000, 2000, 1000],
          },
          {
            name: 'Q3 2025',
            data: [3000, 4000, 4000, 2000, 5000],
          },
        ],
      },
      {
        updatedTime: '2025-02-26T06:11:23.16',
        dashboardReportID: '9bd24473-9126-4cba-a8fd-1d31ec4fc9f7',
        dashboardID: '90df25b3-d285-4612-b102-c665519d618b',
        chart: {
          type: 'line',
        },
        title: {
          text: 'Monthly Car Sales by Dealerships',
        },
        xAxis: {
          categories: [
            'AutoNation',
            'CarMax',
            'DriveTime',
            'Penske Automotive',
            'Hendrick Automotive',
          ],
        },
        yAxis: {
          title: {
            text: 'Car Sales Count',
          },
        },
        tooltip: {
          valueSuffix: ' cars',
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
        },
        series: [
          {
            name: 'Sales in 2025',
            data: [1020, 1640, 470, 3670, 12630],
          },
        ],
      },
      {
        updatedTime: '2025-02-26T06:11:25.533',
        dashboardReportID: '4b245ad5-2d8e-41bf-b72a-faa7548fed69',
        dashboardID: '90df25b3-d285-4612-b102-c665519d618b',
        chart: {
          type: 'column',
        },
        title: {
          text: 'Yearly Car Sales by Manufacturer',
        },
        xAxis: {
          categories: ['Toyota', 'Ford', 'BMW', 'Tesla', 'Honda'],
        },
        yAxis: {
          title: {
            text: 'Car Sales Count',
          },
        },
        tooltip: {
          valueSuffix: ' cars',
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
            stacking: 'normal',
          },
        },
        series: [
          {
            name: '2024',
            data: [14400, 2000, 1000, 2000, 1300],
          },
          {
            name: '2025',
            data: [14400, 2000, 1000, 2000, 0],
          },
          {
            name: '2023',
            data: [14400, 2000, 0, 2000, 0],
          },
        ],
      },
      {
        updatedTime: '2025-02-26T06:11:25.72',
        dashboardReportID: '6e012594-ef4b-4b78-b3ef-4b0943f90a2e',
        dashboardID: '90df25b3-d285-4612-b102-c665519d618b',
        chart: {
          type: 'column',
        },
        title: {
          text: 'Available Car Stock by Type',
        },
        xAxis: {
          categories: [
            'Sedan',
            'SUV',
            'Hatchback',
            'Convertible',
            'Pickup Truck',
          ],
        },
        yAxis: {
          title: {
            text: 'Available Stock',
          },
        },
        tooltip: {
          valueSuffix: ' cars',
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
            stacking: 'normal',
          },
        },
        series: [
          {
            name: 'Stock',
            data: [
              { y: 9542, color: '#7FE1DC' },
              { y: 74546, color: '#58D68D' },
              { y: 12587, color: '#1ABC9C' },
              { y: 50261, color: '#F4D03F' },
              { y: 18211, color: '#2E2E2E' },
            ],
          },
        ],
      },
    ];
    

    this.dashData = alldashData.filter((report: any) => report.dashboardTypeID !== 2);
    this.cdr.detectChanges();
    this.createCharts(this.dashData);      
    
  }

  // helper functions
  private createCharts(reports: any[]): void {
    reports.forEach(report => {
      this.createChart(report);
    });
  }

  private createChart(report: any): void {
    const chartContainerId = 'chart-column-' + report.dashboardReportID;
    const chartConfig = {
      chart: {
        type: report.chart.type || 'column'
      },
      title: {
        text: report.title.text || 'No Title'
      },
      xAxis: {
        categories: report.xAxis.categories || []
      },
      yAxis: {
        title: {
          text: report.yAxis.title.text || 'No Data'
        }
      },
      series: report.series || [],
      credits: {
        enabled: false,
      },
    };
    Highcharts.chart(chartContainerId, chartConfig);
  }

}
