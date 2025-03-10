import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
 
  phrases: string[] = [
    "I'm THENGARAI MAHARAJAN",
    "I'm a Computer Science Engineer,",
    "I'm a Web Developer,",
    "I Design, Develop, Maintain, Build and Deploy Enterprise Level Web Applications"
  ];

  characters = "01";
  finalText: { letter: string; isScrambled: boolean }[][] = [];
  animationComplete = false;
  frame = 0;
  queue: { from: string; to: string; start: number; end: number; char?: string }[][] = [];
  animationInterval!: any;

  constructor(
    private router :Router
  ){}

  ngOnInit() {
    this.startScrambleAnimation();
  }

  async startScrambleAnimation() {
    for (const phrase of this.phrases) {
      await this.setScrambledText(phrase);
    }
    this.animationComplete = true; // Button appears only after all phrases are done
  }

  setScrambledText(newText: string): Promise<void> {
    return new Promise((resolve) => {
      const maxLength = newText.length;
      const textQueue = [];
      const outputText = Array(maxLength).fill({ letter: '', isScrambled: false });

      for (let i = 0; i < maxLength; i++) {
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        textQueue.push({ from: '', to, start, end });
      }

      this.queue.push(textQueue);
      this.finalText.push(outputText);
      this.frame = 0;

      this.animationInterval = setInterval(() => this.updateText(resolve), 60); // Slower update speed
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
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          currentQueue[i].char = char;
        }
        output[i] = { letter: char, isScrambled: true };
      } else {
        output[i] = { letter: from, isScrambled: false };
      }
    }

    this.finalText[this.finalText.length - 1] = output;
    this.frame++;

    if (complete === currentQueue.length) {
      clearInterval(this.animationInterval);
      resolve();
    }
  }

  randomChar(): string {
    return this.characters.charAt(Math.floor(Math.random() * this.characters.length));
  }
  
  routeToProfile(){
    this.router.navigate(['home/profile']);
  }

}