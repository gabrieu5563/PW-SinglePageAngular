import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  constructor(private router: Router){

  }
  sair(){
    this.router.navigate(['/login']);
  }
  home(){
    this.router.navigate(['/home'])
  }
  suportados(){
    this.router.navigate(['/usuario'])
  }
}
