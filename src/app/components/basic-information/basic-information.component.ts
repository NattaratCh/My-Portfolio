import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init()
  }

}
