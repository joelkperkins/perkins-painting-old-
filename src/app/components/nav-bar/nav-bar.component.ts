import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  toggleNav: boolean = false;

  constructor() {
   }

  ngOnInit() {
  }

  onToggleNav() {
    this.toggleNav = (this.toggleNav) ? false : true;
  }

  navigateTo(id) {
    this.toggleNav = (this.toggleNav) ? false : true;
    console.log(id);
    const destination = document.getElementById(id);
    destination.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

}
