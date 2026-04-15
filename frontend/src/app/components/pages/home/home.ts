import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  email = '';
  password = '';
  error = '';

  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:4000';

  onSubmit() {
    console.log("Click on funciona");
    this.error = '';

    this.http.post(`${this.apiUrl}/users`, {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {

        // 🔐 Guardar token manualmente
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        // 🚀 Redirigir
        this.router.navigateByUrl('/usuarios', { replaceUrl: true });
      },

      error: (err) => {
        console.log('ERROR LOGIN', err);
        this.error = 'Credenciales incorrectas';
      }
    });
  }
}
