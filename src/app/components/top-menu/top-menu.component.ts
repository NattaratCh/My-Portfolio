import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  navBarClass = 'navbar-transparent'
  isMobileMenuCollapse = true

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  changeNavBarColor(event) {
    if(window.pageYOffset >= 400) {
      this.navBarClass = ''
    } else {
      this.navBarClass = 'navbar-transparent'
    }
  }

  toggleMenu() {
    console.log('toggleMenu')
    this.isMobileMenuCollapse = !this.isMobileMenuCollapse
  }
}
