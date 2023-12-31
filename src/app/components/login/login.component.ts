import { Component, ViewEncapsulation} from '@angular/core';
import { TokentradicionalService, Usuario } from '../../services/tokentradicional.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';
  //autenticado: boolean= false;
  mensaje: string= '';
  constructor(private _httpClient: HttpClient, private TokentradicionalService: TokentradicionalService, private router: Router) {

  }

  // login(username: string, password: string): void {
  //   const loginUrl = 'http://localhost:3000/login';
  //   this._httpClient.post<any>(loginUrl, { username, password }).subscribe({
  //     next: (response) => {
  //       const token = response.token;
  //       if (token) {
  //         this.TokentradicionalService.setToken(token);
  //         this.router.navigate(['/usuarios']);
  //       } else {
  //         this.mensaje = 'Error al generar el token';
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Error al iniciar sesión:', error);
  //       this.mensaje = 'Error al iniciar sesión';
  //     }
  //   });
  // }
}
