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

  projects = [
    {
      name: 'AI Chat Bot',
      description: 'An interactive AI Chat Bot powered by Google Gemini API, built with Angular.',
      link: '/chatbot'
    },
    {
      name: 'Resume Builder',
      description: 'A dynamic web application using Angular, Bootstrap, and jsPDF to generate PDF resumes.',
      link: '/resume-builder'
    },
    {
      name: 'Dynamic Forms Generator',
      description: 'Utilizes Angular reactive forms to create dynamic form fields from user input.',
      link: '/dynamic-forms'
    },
    {
      name: 'Timeline Tracker',
      description: 'Developed using Angular & ExcelJS to track events and generate Excel reports.',
      link: '/time-lines-tracker'
    },
    {
      name: 'Image Detection & Manual Cropper',
      description: 'A document scanning tool using OpenCV and edge detection algorithms.',
      link: 'https://thengaraimaharajandev.github.io/Image-Edge-Detection/'
    }
  ];

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
