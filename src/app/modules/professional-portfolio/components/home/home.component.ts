import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  phrases: string[] = [
    "I'm Computer Science Engineer",
    "I'm Thengarai Maharajan",
    "I'm Web Developer"
  ];
  
  characters = "01";
  scrambledText: { letter: string; isScrambled: boolean }[] = [];
  currentPhraseIndex = 0;
  frame = 0;
  queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
  animationInterval!: any;

  ngOnInit() {
    this.startScrambleAnimation();
  }

  startScrambleAnimation() {
    this.setScrambledText(this.phrases[this.currentPhraseIndex]).then(() => {
      setTimeout(() => {
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
        this.startScrambleAnimation();
      }, 3000);
    });
  }

  setScrambledText(newText: string): Promise<void> {
    return new Promise((resolve) => {
      const oldText = this.scrambledText.map(c => c.letter).join("") || "";
      const maxLength = Math.max(oldText.length, newText.length);
      this.queue = [];

      for (let i = 0; i < maxLength; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }

      this.frame = 0;
      clearInterval(this.animationInterval);
      this.animationInterval = setInterval(() => this.updateText(resolve), 20);
    });
  }

  updateText(resolve: () => void) {
    let output = [];
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output.push({ letter: to, isScrambled: false });
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output.push({ letter: char, isScrambled: true });
      } else {
        output.push({ letter: from, isScrambled: false });
      }
    }

    this.scrambledText = output;
    this.frame++;

    if (complete === this.queue.length) {
      clearInterval(this.animationInterval);
      resolve();
    }
  }

  randomChar(): string {
    return this.characters.charAt(Math.floor(Math.random() * this.characters.length));
  }
  
}