import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';
import FingerprintJS from '@fingerprintjs/fingerprintjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    private analytics : AnalyticsService
  ){}

  ngOnInit(): void {
    
    this.generateFingerPrint();

  }

  async generateFingerPrint(){
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const fingerprint = result.visitorId;
    this.analytics.setAnalytics('Application Loaded','Initialization','User View your website',`${fingerprint+'-Viewed your website'}`,fingerprint);
  }

}
