import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeDownloaderService } from '../../../../services/resume-downloader.service';
import { RoutingService } from '../../../../services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showGlassLayer = false;
  phrases: string[] = [
    "I'm Thengarai Maharajan",
    "I'm a Computer Science Engineer,",
    "I'm a Web Developer.",
  ];

  characters = '01010101';
  displayLines: string[] = [];
  queue: { to: string; start: number; end: number; char?: string }[][] = [];
  animationComplete = false;
  frame = 0;
  animationInterval!: any;

  constructor(
    private router: Router,
    private resumeDownloaderService: ResumeDownloaderService,
    public routeService : RoutingService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showGlassLayer = true;
      this.startScrambleAnimation();
    }, 4000);
  }

  downloadResumePdf(): void {
    this.resumeDownloaderService.downloadResume();
  }

  async startScrambleAnimation() {
    for (const phrase of this.phrases) {
      await this.animateTextLine(phrase);
    }
    setTimeout(() => {
      this.animationComplete = true;
    }, 300);
  }

  animateTextLine(newText: string): Promise<void> {
    return new Promise((resolve) => {
      const queueLine = [];
      const maxLength = newText.length;

      for (let i = 0; i < maxLength; i++) {
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 30);
        queueLine.push({ to, start, end });
      }

      this.queue.push(queueLine);
      this.displayLines.push('');
      this.frame = 0;

      this.animationInterval = setInterval(() => this.updateLine(resolve), 30);
    });
  }

  updateLine(resolve: () => void) {
    const currentQueue = this.queue[this.queue.length - 1];
    let lineOutput = '';
    let complete = 0;

    for (let i = 0; i < currentQueue.length; i++) {
      let { to, start, end, char } = currentQueue[i];

      if (this.frame >= end) {
        complete++;
        lineOutput += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.4) {
          char = this.randomChar();
          currentQueue[i].char = char;
        }
        lineOutput += char;
      } else {
        lineOutput += ' ';
      }
    }

    this.displayLines[this.displayLines.length - 1] = lineOutput;
    this.frame++;

    if (complete === currentQueue.length) {
      clearInterval(this.animationInterval);
      resolve();
    }
  }

  randomChar(): string {
    return this.characters.charAt(Math.floor(Math.random() * this.characters.length));
  }

  routeToProfile(): void {
    this.router.navigate(['home/profile']);
  }

  routeToProjects(): void {
    this.router.navigate(['home/projects']);
  }
}