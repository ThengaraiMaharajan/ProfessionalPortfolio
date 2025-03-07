import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  textSequence: string[] = [
    'Thengarai Maharajan',
    'Computer Science Engineer',
    'Web Developer'
  ];
  currentIndex = 0;

  constructor( ){
    this.animateText();
  }

  ngOnInit(): void {

  }
  animateText() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.textSequence.length;
    }, 3000); // Rotate every 3 seconds
  }


}
