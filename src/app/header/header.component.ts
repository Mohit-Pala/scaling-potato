import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}

  navbarRoutes = [
    {path:'/', name:'Home'},
    {path:'/form', name:'Config Tool'},
    {path:'/output', name:'Output'}
  ]

  navigate(path: String) {
    this.router.navigate([path]);
  }
}
