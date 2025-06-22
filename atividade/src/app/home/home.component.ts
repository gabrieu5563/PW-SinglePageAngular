import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){

  }
  sair(){
    this.router.navigate(['/login']);
  }
  sobre(){
    this.router.navigate(['/sobre']);
  }
  usuarios(){
    this.router.navigate(['/usuario'])
  }
}
