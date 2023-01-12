import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public router:Router){}

  navbarCollapsed = true;
 
toggleNavbarCollapsing() { //to collapse the header 
    this.navbarCollapsed = !this.navbarCollapsed;
}



}
