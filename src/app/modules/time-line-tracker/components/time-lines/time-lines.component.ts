import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';
import { ExportToExcelService } from '../../services/export-to-excel.service';

@Component({
  selector: 'app-time-lines',
  templateUrl: './time-lines.component.html',
  styleUrls: ['./time-lines.component.css']
})
export class TimeLinesComponent implements OnInit {

  // Timeline table properties (using processed data)
  displayedColumns: string[] = ['index', 'eventName', 'eventDescription', 'formatedDate', 'pastOrFuture', 'dayCount'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  // File upload table properties (using raw file data)
  fileDisplayedColumns: string[] = ['index', 'eventName', 'eventDescription', 'eventDate', 'pastOrPresent', 'dayCount'];
  fileDataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  // Toggle view: 'card' (default) or 'table'
  selectedFileView: string = 'card';

  timeLineForm!: FormGroup;
  formValues: any;
  jsonData: any;
  formSubmittedDisplayData: boolean = false;
  showFileDataDisplay: boolean = false;

  // Set the sort/paginator for the file table via template reference variables
  @ViewChild('fileSort') set fileSort(sort: MatSort) {
    if (sort) {
      this.fileDataSource.sort = sort;
    }
  }

  @ViewChild('filePaginator') set filePaginator(paginator: MatPaginator) {
    if (paginator) {
      this.fileDataSource.paginator = paginator;
    }
  }

  constructor(private fb: FormBuilder, private exportTotExcel: ExportToExcelService) {}

  ngOnInit(): void {
    this.timeLineForm = this.fb.group({
      name: [''],
      dob: [''],
      events: this.fb.array([])
    });
  }

  get events(): FormArray {
    return this.timeLineForm.get('events') as FormArray;
  }

  addEvent() {
    const eventGroup = this.fb.group({
      eventName: [''],
      eventDescription: [''],
      eventDate: [''],
      isPast: ['']
    });
    this.events.push(eventGroup);
  }

  removeEvent(index: number) {
    this.events.removeAt(index);
  }

  onSubmit() {
    this.formValues = this.timeLineForm.value;
    this.formValues.events.forEach((userEvent: any) => {
      userEvent.pastOrFuture = this.isPastOrFuture(userEvent.eventDate);
      userEvent.formatedDate = this.formatDate(userEvent.eventDate);
      userEvent.dayCount = this.calculateDaysDifference(userEvent.eventDate);
    });
    this.dataSource.data = this.formValues.events;
    this.exportTotExcel.exportToExcel([this.formValues], 'form_data');
    this.formSubmittedDisplayData = true;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      this.jsonData = XLSX.utils.sheet_to_json(sheet);
      this.fileDataSource.data = this.jsonData;
    };
    reader.readAsArrayBuffer(file);
    this.showFileDataDisplay = true;
  }

  uploadFile() {
    console.log(this.jsonData);
  }

  formatDate(inputDate: any): string {
    if (!inputDate) return '';
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    if (inputDate instanceof Date) {
      const day = inputDate.getDate().toString().padStart(2, '0');
      const month = months[inputDate.getMonth()];
      const year = inputDate.getFullYear();
      return `${day}-${month}-${year}`;
    } else if (typeof inputDate === 'string') {
      const parts = inputDate.split('-');
      if (parts.length < 3) return inputDate;
      const day = parts[2];
      const month = months[parseInt(parts[1], 10) - 1];
      const year = parts[0];
      return `${day}-${month}-${year}`;
    }
    return '';
  }

  isPastOrFuture(inputDate: any): string {
    if (!inputDate) return '';
    const currentDate = new Date();
    const providedDate = inputDate instanceof Date ? inputDate : new Date(inputDate);
    if (providedDate < currentDate) return 'past';
    else if (providedDate > currentDate) return 'future';
    else return 'present';
  }
  
  calculateDaysDifference(dateValue: any): string {
    if (!dateValue) return '';
    const currentDate = new Date();
    const providedDate = dateValue instanceof Date ? dateValue : new Date(dateValue);
    const differenceInMs = providedDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
    if (differenceInDays < 0) return 'past : ' + Math.abs(differenceInDays) + ' days ago';
    else if (differenceInDays > 0) return 'future : ' + differenceInDays + ' days to go';
    else return 'present';
  }

  applyFilter(filterEvent: any, column: string) {
    this.fileDataSource.filterPredicate = (data: any, filter: string) => {
      return data[column] && data[column].toLowerCase().includes(filter);
    };
    const filterValue = filterEvent.value.trim().toLowerCase();
    this.fileDataSource.filter = filterValue;
  }
}
