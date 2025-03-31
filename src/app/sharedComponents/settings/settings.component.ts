import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  @Input() visible = false;
  @Input() isDarkMode = false;
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  fontSize = 100;

  increaseFont() {
    this.fontSize = Math.min(this.fontSize + 10, 150);
    document.documentElement.style.setProperty('--font-scale', `${this.fontSize}%`);
  }

  decreaseFont() {
    this.fontSize = Math.max(this.fontSize - 10, 80);
    document.documentElement.style.setProperty('--font-scale', `${this.fontSize}%`);
  }

  toggleThemeMode() {
    this.toggleTheme.emit();
  }

  closePanel() {
    this.close.emit();
  }

}
