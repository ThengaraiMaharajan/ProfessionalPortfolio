import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';
import FingerprintJS from '@fingerprintjs/fingerprintjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  isSidebarVisible = true;

  constructor(
    private analytics : AnalyticsService
  ){}

  ngOnInit(): void {

  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
