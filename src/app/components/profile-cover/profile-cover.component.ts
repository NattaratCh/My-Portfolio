import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsServiceService } from 'src/app/services/google-analytics-service.service';

@Component({
  selector: 'profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.scss']
})

export class ProfileCoverComponent implements OnInit {

  constructor(private gaService: GoogleAnalyticsServiceService) { }

  ngOnInit() {
  }

  onCVClick() {
    this.gaService.sendEvent('clickCV', {})
  }

}
