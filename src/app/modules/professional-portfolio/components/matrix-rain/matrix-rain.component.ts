import { Component, AfterViewInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-matrix-rain',
  templateUrl: './matrix-rain.component.html',
  styleUrl: './matrix-rain.component.css',
})
export class MatrixRainComponent {

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D | null;
  private matrixChars: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private fontSize = 16;
  private columns!: number;
  private drops!: number[];
  private colors: string[] = ['#00FF00','#FF0000','#00FF00', '#0000FF', '#00FF00', '#00FF00','#FFFFFF']; // Red, Blue, Green, White
  private backgroundColor: string = 'rgba(0, 0, 0, 0.1)';
  showGlassLayer = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.canvas = this.elementRef.nativeElement.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.setupCanvas();
  
    this.updateThemeColors(); // Set initial theme-based colors
  
    window.addEventListener('resize', () => this.setupCanvas());
    setInterval(() => this.drawMatrixRain(), 50);
  
    // Watch for theme change
    const observer = new MutationObserver(() => this.updateThemeColors());
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // ⏳ Show glass layer after 4s
    setTimeout(() => {
      this.showGlassLayer = true;
    }, 4000);

  }

  private updateThemeColors(): void {
    const isDarkTheme = document.body.classList.contains('dark-theme');
  
    if (isDarkTheme) {
      this.colors = ['#00FF00', '#66FF66', '#33FF33', '#FFFFFF'];
      this.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // deep black with slight fade
    } else {
      this.colors = ['#007bff', '#555', '#999', '#66b2ff'];
      this.backgroundColor = 'rgba(240, 240, 255, 0.2)'; // soft pastel for light mode
    }
  
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  

  private setupCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.zIndex = '0';
    this.canvas.style.overflow = 'hidden';
    this.columns = Math.floor(this.canvas.width / this.fontSize);
    this.drops = Array(this.columns).fill(1);
  }

  private drawMatrixRain(): void {
    if (!this.ctx) return;
    
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)];
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.ctx.fillStyle = color;
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
      
      if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }

}
