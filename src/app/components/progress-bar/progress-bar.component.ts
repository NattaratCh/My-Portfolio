import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input('skill') skill: any

  @Input('percent') percent: any

  percentString = ""
  name = ""

  constructor() { }

  ngOnInit() {
    this.percentString = this.percent + '%'
    this.name = this.skill
  }

}
