import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  phrases: string[] = [
    "I'm Thengarai Maharajan",
    "I'm a Computer Science Engineer,",
    "I'm a Web Developer."
  ];

  // characters = "01";
  characters = "01010101";
  // characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // characters = "アイウエオカキクケコサシスセソタチツテト";


  finalText: { letter: string; isScrambled: boolean }[][] = [];
  displayLines: string[] = [];
  animationComplete = false;
  frame = 0;
  queue: { from: string; to: string; start: number; end: number; char?: string }[][] = [];
  animationInterval!: any;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.startScrambleAnimation();
    }, 4000);
  }

  async startScrambleAnimation() {
    for (const phrase of this.phrases) {
      await this.setScrambledText(phrase);
    }
    setTimeout(() => {
      this.animationComplete = true;
    }, 300);
  }

  setScrambledText(newText: string): Promise<void> {
    return new Promise((resolve) => {
      const maxLength = newText.length;
      const textQueue = [];
      const outputText = Array.from({ length: maxLength }, () => ({ letter: '', isScrambled: false }));

      for (let i = 0; i < maxLength; i++) {
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 30);         // faster
        const end = start + Math.floor(Math.random() * 35);   // faster
        textQueue.push({ from: '', to, start, end });
      }

      this.queue.push(textQueue);
      this.finalText.push(outputText);
      this.displayLines.push('');
      this.frame = 0;

      this.animationInterval = setInterval(() => this.updateText(resolve), 30);
    });
  }

  updateText(resolve: () => void) {
    let complete = 0;
    const currentQueue = this.queue[this.queue.length - 1];
    const output = this.finalText[this.finalText.length - 1];

    for (let i = 0; i < currentQueue.length; i++) {
      let { from, to, start, end, char } = currentQueue[i];

      if (this.frame >= end) {
        complete++;
        output[i] = { letter: to, isScrambled: false };
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.4) {
          char = this.randomChar();
          currentQueue[i].char = char;
        }
        output[i] = { letter: char, isScrambled: true };
      } else {
        output[i] = { letter: from, isScrambled: false };
      }
    }

    this.finalText[this.finalText.length - 1] = output;
    this.displayLines[this.displayLines.length - 1] = output.map(c => c.letter).join('');
    this.frame++;

    if (complete === currentQueue.length) {
      clearInterval(this.animationInterval);
      resolve();
    }
  }

  randomChar(): string {
    return this.characters.charAt(Math.floor(Math.random() * this.characters.length));
  }

  routeToProfile() {
    this.router.navigate(['home/profile']);
  }

  routeToProjects() {
    this.router.navigate(['home/projects']);
  }

  downloadResume() {
    const resumeUrl = '../../../../../assets/Resumes/ThengaraiMaharajan_FrontEnd_2.7years.pdf';
    window.open(resumeUrl, '_blank');

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'ThengaraiMaharajan-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}