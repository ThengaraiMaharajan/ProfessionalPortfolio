import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSidebarVisible = false;
  isDarkMode = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();

    // Sidebar closes on route change
    // ... (already added earlier)
  }

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  applyTheme(): void {
    const html = document.documentElement; // <html>
    if (this.isDarkMode) {
      html.classList.add('tm-dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('tm-dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
  
}
