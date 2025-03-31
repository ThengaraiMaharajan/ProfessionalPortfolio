import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSidebarVisible = false;
  isSettingsVisible = false;  // new
  isDarkMode = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSidebarVisible = false;
        this.isSettingsVisible = false;
      }
    });
  }

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  toggleSettings(): void {
    this.isSettingsVisible = !this.isSettingsVisible;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  applyTheme(): void {
    const html = document.documentElement;
    if (this.isDarkMode) {
      html.classList.add('tm-dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('tm-dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}

