import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { UsuariosComponent } from './usuario/usuario.component';



export const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'sobre', component: SobreComponent},
  {path:'usuario',component: UsuariosComponent},
];

