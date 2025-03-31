import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSidebarVisible = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Listen for route changes and hide sidebar
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSidebarVisible = false;
      }
    });
  }

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
