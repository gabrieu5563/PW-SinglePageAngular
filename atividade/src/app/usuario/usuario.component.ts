import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuariosComponent {
  usuarios: any[] = [];
  usuario: any = { id: '', nome: '', telefone: '', senha: '' };
  editando = false;
  contadorId = 1;

  constructor(private router: Router) {
    this.carregarUsuarios();
  }

  home() {
    this.router.navigate(['/home']);
  }

  sair() {
    this.router.navigate(['/login']);
  }
  
  sobre() {
    this.router.navigate(['/sobre']);
  }
  

  carregarUsuarios() {
    const dados = localStorage.getItem('usuarios');
    this.usuarios = dados ? JSON.parse(dados) : [];
    this.contadorId = this.usuarios.length + 1;
  }

  gerarIdSimples(): string {
    return this.contadorId.toString();
  }

  salvarUsuario() {
    if (!this.usuario.nome || !this.usuario.telefone || !this.usuario.senha) {
      alert('Preencha todos os campos!');
      return;
    }

    if (this.editando) {
      const index = this.usuarios.findIndex(u => u.id === this.usuario.id);
      if (index !== -1) {
        this.usuarios[index] = { ...this.usuario };
      }
    } else {
      this.usuario.id = this.gerarIdSimples();
      this.usuarios.push({ ...this.usuario });
      this.contadorId++;
    }

    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    this.resetarFormulario();
  }

  editarUsuario(usuario: any) {
    this.usuario = { ...usuario };
    this.editando = true;
  }

  excluirUsuario(id: string) {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.usuarios = this.usuarios.filter(u => u.id !== id);
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
      this.contadorId = this.usuarios.length + 1;
    }
  }

  resetarFormulario() {
    this.usuario = { id: '', nome: '', telefone: '', senha: '' };
    this.editando = false;
  }
}
