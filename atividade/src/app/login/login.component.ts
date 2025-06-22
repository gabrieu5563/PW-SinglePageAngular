import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){

    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength]],
      email: ['', [Validators.email, Validators.required]],
      idade: [null,[Validators.required, Validators.min(18)]]
    });
  }
  onSubmit(){
    alert("formulario enviado com sucesso!")
    this.router.navigate(['/home']);
  }
}
