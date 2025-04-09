import { Component, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
// mat imports 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dynamic-tables',
  templateUrl: './dynamic-tables.component.html',
  styleUrl: './dynamic-tables.component.css'
})
export class DynamicTablesComponent {

  // var declaration segment

  // mat var
  @ViewChildren(MatPaginator) paginators!: QueryList<MatPaginator>;
  @ViewChildren(MatSort) sorts!: QueryList<MatSort>;

  // reponse var
  reports: any[] = [];
  // value var 
  tableReports: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  // life cycles segment
  ngOnInit(): void {
    // initial method calls
    this.getData();
  }

  ngAfterViewInit() {
    this.assignPaginatorAndSort();
    this.paginators.changes.subscribe(() => this.assignPaginatorAndSort());
    this.sorts.changes.subscribe(() => this.assignPaginatorAndSort());
  }

  // initial load API calls segment
  getData() {
    let allReports = [
      {
        dashboardID: '90df25b3-d285-4612-b102-c665519d618b',
        dashboardReportID: '6e012594-ef4b-4b78-b3ef-4b0943f90a2e',
        dashboardTypeID: 2,
        reportType: 'table view',
        columns: [
          {
            text: 'Brand Name',
            value: 'CarBrand',
            isDisply: true,
          },
          {
            text: 'Sales Reference #',
            value: 'SalesReference',
            isDisply: true,
            isLink: true,
            linkBaseURL: 'https://carbrand.com/',
          },
          {
            text: 'Days in Stock',
            value: 'StockDuration',
            isDisply: true,
          },
        ],
        Result: [
          {
            CarBrand: 'Toyota',
            SalesReference: 'CAR-TOY001',
            StockDuration: '158d 12h',
            ReferenceURL: '/dashboard/TOYOTA-STOCK',
          },
          {
            CarBrand: 'Honda',
            SalesReference: 'CAR-HON002',
            StockDuration: '140d 8h',
            ReferenceURL: '/dashboard/HONDA-STOCK',
          },
          {
            CarBrand: 'Ford',
            SalesReference: 'CAR-FRD003',
            StockDuration: '130d 5h',
            ReferenceURL: '/dashboard/FORD-STOCK',
          },
          {
            CarBrand: 'BMW',
            SalesReference: 'CAR-BMW004',
            StockDuration: '120d 3h',
            ReferenceURL: '/dashboard/BMW-STOCK',
          },
          {
            CarBrand: 'Tesla',
            SalesReference: 'CAR-TES005',
            StockDuration: '110d 2h',
            ReferenceURL: '/dashboard/TESLA-STOCK',
          }
        ],
        paging: true,
      },
      {
        dashboardID: '90df25b3-d285-4612-b102-c665519d618b',
        dashboardReportID: '9bd24473-9126-4cba-a8fd-1d31ec4fc9f7',
        dashboardTypeID: 2,
        reportType: 'table view',
        columns: [
          {
            text: 'Request Type',
            value: 'RequestType',
            isDisply: true,
          },
          {
            text: 'Reference #',
            value: 'ReferenceNumber',
            isDisply: true,
            isLink: true,
            linkBaseURL: null,
          },
          {
            text: 'Processing Time',
            value: 'ProcessingTime',
            isDisply: true,
          },
        ],
        Result: [
          {
            RequestType: 'Stock Refill Approval',
            ReferenceNumber: 'CAR-STK1001',
            ProcessingTime: '30d 5h',
            ReferenceURL: null,
          },
          {
            RequestType: 'Stock Refill Approval',
            ReferenceNumber: 'CAR-STK1002',
            ProcessingTime: '28d 3h',
            ReferenceURL: null,
          },
          {
            RequestType: 'Stock Refill Approval',
            ReferenceNumber: 'CAR-STK1003',
            ProcessingTime: '25d 8h',
            ReferenceURL: null,
          },
          {
            RequestType: 'Stock Refill Approval',
            ReferenceNumber: 'CAR-STK1004',
            ProcessingTime: '15d 10h',
            ReferenceURL: null,
          },
          {
            RequestType: 'Stock Refill Approval',
            ReferenceNumber: 'CAR-STK1005',
            ProcessingTime: '12d 6h',
            ReferenceURL: null,
          },
        ],
        paging: true,
      }
    ];
    

    const tableReports = allReports.filter( (report: any) => report.dashboardTypeID === 2 );
    this.setupMatTable(tableReports);
    this.cdr.detectChanges();
  }

  // helper functions segment
  setupMatTable(tableReports: any[]) {
    if (tableReports.length === 0) return;
    this.tableReports = tableReports.map((report) => {
      const columns = report.columns.filter((col: any) => col.isDisply).map((col: any) => col.text);
      const data = report.Result.map((row: any) => {
        const newRow: any = {};
        report.columns.forEach((col: any) => {
          if (col.isDisply) {
            newRow[col.text] = row[col.value];
          }
        });
        return newRow;
      });
      const dataSource = new MatTableDataSource(data);
      return {columns,dataSource};
    });
  }

  assignPaginatorAndSort() {
    const paginatorArray = this.paginators.toArray();
    const sortArray = this.sorts.toArray();
    this.tableReports.forEach((report, index) => {
      if (paginatorArray[index] && sortArray[index]) {
        report.dataSource.paginator = paginatorArray[index];
        report.dataSource.sort = sortArray[index];
      }
    });
  }

  pageEvent(event: any, index: number) {
    const report = this.tableReports[index];
    if (report.dataSource.paginator) {
      report.dataSource.paginator.pageIndex = event.pageIndex;
      report.dataSource.paginator.pageSize = event.pageSize;
    }
  }

}
