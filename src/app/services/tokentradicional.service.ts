import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Usuario {
  username: string;
  password: string;
  name: string;
  birth: Date;
  favoriteAlbum: string;
  imagen: string;
}
export interface Respuesta {
  idToken: string;
  // Otras propiedades de resp, si las hay
}
@Injectable({
  providedIn: 'root'
})

export class TokentradicionalService {
  // private url='https://identitytoolkit.googleapis.com/v1';
  // private apiKey ='AIzaSyACSq21yv4tzq0SfTDGFYe2a-nrgRtKZ2U';
  // private usuarioAutenticado: Usuario | null = null;
  // private autenticado = false;

  // private token: string | null = null;
//  userToken: string ;
 
  // usuarios: Usuario[] = [];


  constructor(private http: HttpClient) {
  //  this.userToken = "";
    // this.usuarios = [
    //   { username: 'cam', password: 'mermelada', name: 'Camily Bravo', birth: new Date(2003, 5, 22), favoriteAlbum: 'Midnights', imagen: 'https://scontent.fmch2-1.fna.fbcdn.net/v/t39.30808-6/353814718_795535462248091_8816633072439741318_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEDIBOvhz3zvuL3ccbWduBk144eCIOZ4w7Xjh4Ig5njDhARuXoDQJmYmCMk1jZ0LlGjKThE2PehswGxNT3SPd_h&_nc_ohc=dsAtj8-Rmo4AX8y8tBM&_nc_ht=scontent.fmch2-1.fna&oh=00_AfAr-3jbE0HMCJ4F-aNleU9lNhGgI86rpe5PcoAp9kzXHw&oe=64B7DEE9'},
    //   { username: 'criper', password: 'pulpi', name: 'Ali', birth: new Date(2003, 4, 2), favoriteAlbum: 'Red', imagen: 'https://scontent.fmch2-1.fna.fbcdn.net/v/t39.30808-6/327912340_710339110443985_5483403665537882164_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFVzga6zLg0q-b_aE8hnjvaFUINlw7czukVQg2XDtzO6TFU4e1w4tS4MAjR37yJll0Ym5Qmd3mmAu3gaGERJxUQ&_nc_ohc=dbwxxE8RrP4AX_AI3WQ&_nc_ht=scontent.fmch2-1.fna&oh=00_AfBFruPSrm8svahl9FEi8Eb1WumdoespgPR7evcZ_6xjOA&oe=64B89027'},
    // ];
    console.log('No se que hago');
   // this.leerToken();
   }  

  //  private guardarToken( idToken: string){
  //   this.userToken = idToken;
  //   localStorage.setItem('token', idToken);

  //   let hoy = new Date();
  //   hoy.setSeconds( 3600 );

  //   localStorage.setItem('expira',hoy.getTime().toString());
    
  // }

  // private leerToken(){
  //   if ( localStorage.getItem('token')){
  //     this.userToken = localStorage.getItem('token') || '';
  //   }else{
  //     this.userToken = '';
  //   }

  //   return this.userToken;
  // }

  // estaAutenticado() : boolean{
  // if (this.userToken.length > 0) {
  //     const expira = Number(localStorage.getItem('expira'));
  //     const expiraDate = new Date();
  //     expiraDate.setTime(expira);
  //     return expiraDate > new Date();
  //   }
  //   return false;
  // }


  //  logout(){
  //   localStorage.removeItem('token');
  // }

  // login( usuario: Usuario ): Observable<Respuesta>{
  //   const authData = {
  //     ...usuario,
  //     returnSecureToken : true
  //   };
  //   return this.http.post(
  //     `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
  //     authData
  //   ).pipe(
  //     map((resp: Object) => {
  //       if ('idToken' in resp) {
  //         const respuestaValida = resp as Respuesta; // Realizar una verificación de tipo
  //         this.guardarToken(respuestaValida.idToken);
  //         this.usuarioAutenticado = {
  //           username: resp.user.email,
  //           name: resp.user.displayName,
  //           imagen: resp.user.photoURL
  //         };
  //         return respuestaValida;
  //       } else {
  //         throw new Error('La respuesta no contiene la propiedad idToken');
  //       }
  //     })
  //   );
  // }
  // nuevoUsuario( usuario:Usuario) {
  //   const authData = {
  //     ...usuario,
  //     returnSecureToken : true
  //   };
  //   return this.http.post(
  //     `${this.url}/accounts:signUp?key=${this.apiKey}`,
  //     authData
  //   ).pipe(
  //     map( resp => {
  //       this.guardarToken(resp['idToken']);
  //       return resp;
  //     })
  //   );
  // }


  // public getToken(): string | null {
  //   return this.token;
  // }
  // public getUsuarioAutenticado(): Usuario | null {
  //   return this.usuarioAutenticado;
  // } 
  // public esta_autenticado(): boolean {
  //   return this.autenticado;
  // }
  
  // public login(username: string, password: string): void {
  //   const loginUrl = `${this.serverUrl}/login`;
  //   const user = this.usuarios.find(u => u.username === username && u.password === password);

  //   if (user) {
  //     this.usuarioAutenticado = user;
  //     this.http.post<any>(loginUrl, { username, password }).subscribe({
  //     next: (result) => {
  //         const token = result.token; // Obtener el token desde la respuesta del servidor
      
  //         if (token) {
  //           this.autenticado = true;
  //           this.token = token;
  //           if (this.token) {
  //             localStorage.setItem(this.secretKey, this.token);
  //           }
  //         } else {
  //           console.log('Error al generar el token');
  //         }
  //       },
  //       error: (error) => {
  //         console.error('Error al iniciar sesión:', error);
  //       }
  //     });  
  // } else {
  //   console.log('Usuario o contraseña incorrecta');}
  // }
  //Devuelve el token
  // public setToken(token: string): void {
  //   this.token = token;
  // }
  
  
  // public logout(): void {
  //   this.autenticado = false;
  //   this.token = null;
  // }

  // getUsername(): string {
  //   return this.usuarioAutenticado ? this.usuarioAutenticado.username : '';
  // }
  // getName(): string {
  //   return this.usuarioAutenticado ? this.usuarioAutenticado.name : '';
  // }
  // getBirth(): Date {
  //   return this.usuarioAutenticado ? this.usuarioAutenticado.birth : new Date();
  // }

  // getImg(): string {
  //   return this.usuarioAutenticado ? this.usuarioAutenticado.imagen : '';
  // }
  // getFavAlbum(): string {
  //   return this.usuarioAutenticado ? this.usuarioAutenticado.favoriteAlbum : '';
  // }
}