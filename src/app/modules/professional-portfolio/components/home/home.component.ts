import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(
    private http: HttpClient
  ){

  }

  openPdf() {
    this.http.get('../../../../../assets/Resumes/ThengaraiMaharajanSResume.pdf', { responseType: 'blob' })
      .subscribe(
        (data: Blob) => {
          const file = new Blob([data], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL, '_blank');
        },
        error => {
          console.error('Error opening PDF:', error);
        }
      );
  }

}
