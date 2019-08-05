import { Injectable } from '@angular/core';
declare var gtag: Function

@Injectable({
  providedIn: 'root'
})

export class GoogleAnalyticsServiceService {

  constructor() { }

  public sendEvent(eventName: string, params: {}) {
    gtag('event', eventName, params);
  }
}
