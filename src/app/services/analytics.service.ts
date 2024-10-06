import { Injectable } from '@angular/core';

declare var gtag : Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  setAnalytics(event : string, event_catagory : string,eventAction: string, event_label : string, value : string){
    gtag(
      'event', event,
      {
        'event_catagory':event_catagory,
        'event_action': eventAction,
        'event_label' : event_label,
        'value' : value
      }
    )
  }

} 
