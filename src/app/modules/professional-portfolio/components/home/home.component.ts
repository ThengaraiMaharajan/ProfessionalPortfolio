import { Component , OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  experience : any = {};

  constructor(
    private datePipe: DatePipe
  ){}

  ngOnInit(): void {
    this.experience.angular=this.dateStr('17/08/2022');
    this.experience.career=this.dateStr('17/08/2022');
  }


  dateStr(dateStr:string){
    const dateString = dateStr;
    // Create a Date object from the string
    const date = new Date(dateString.split('/').reverse().join('-'));
    // Use DatePipe to format the date
    const datePipe = new DatePipe('en-US');
    const year = datePipe.transform(date, 'yyyy');
    const month = datePipe.transform(date, 'MMMM');
    const day = datePipe.transform(date, 'd');
    const time = datePipe.transform(date, 'h:mm a');
    return day+'-'+month+'-'+year;
  }

}
