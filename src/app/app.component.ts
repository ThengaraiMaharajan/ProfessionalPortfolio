import { Component, OnInit } from '@angular/core';
import { RoutingService } from './services/routing.service';
import { ResumeDownloaderService } from './services/resume-downloader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // var declarations

  // side bar code
  leftSidebarOpen = false;
  rightSidebarOpen = false;

  // right side bar code
  isDarkTheme = false;
  fontSize = 14;
  selectedLanguage = 'en';

  // footer code
  currentYear = new Date().getFullYear();

  constructor(
    public routingService: RoutingService,
    public resumeDownloaderService: ResumeDownloaderService,
  ) {}

  ngOnInit(): void {
    const theme = localStorage.getItem('theme') || 'light';
  this.isDarkTheme = theme === 'dark';
  document.body.classList.toggle('dark-theme', this.isDarkTheme);
    // this.loadSettingsFromLocalStorage();
  }

  toggleLeftSidebar() {
    this.leftSidebarOpen = !this.leftSidebarOpen;
  }

  toggleRightSidebar() {
    this.rightSidebarOpen = !this.rightSidebarOpen;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    // this.saveSettingsToLocalStorage();
  }

  updateFontSize() {
    document.body.style.fontSize = `${this.fontSize}px`;
    this.saveSettingsToLocalStorage();
  }

  restoreDefaults() {
    this.isDarkTheme = false;
    this.fontSize = 14;
    this.selectedLanguage = 'en';
    document.body.classList.remove('dark-theme');
    document.body.style.fontSize = '14px';
    this.saveSettingsToLocalStorage();
  }

  translateSite() {
    // Placeholder for future translation integration
    alert(`Language set to: ${this.selectedLanguage}`);
    this.saveSettingsToLocalStorage();
  }

  private saveSettingsToLocalStorage(): void {
    const settings = {
      isDarkTheme: this.isDarkTheme,
      fontSize: this.fontSize,
      selectedLanguage: this.selectedLanguage,
    };
    localStorage.setItem('siteSettings', JSON.stringify(settings));
  }

  private loadSettingsFromLocalStorage(): void {
    const settings = localStorage.getItem('siteSettings');
    if (settings) {
      const parsed = JSON.parse(settings);
      this.isDarkTheme = parsed.isDarkTheme ?? false;
      this.fontSize = parsed.fontSize ?? 14;
      this.selectedLanguage = parsed.selectedLanguage ?? 'en';

      // Apply loaded settings
      if (this.isDarkTheme) {
        document.body.classList.add('dark-theme');
      }
      document.body.style.fontSize = `${this.fontSize}px`;
    }
  }


}

