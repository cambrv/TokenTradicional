import { Component, OnInit } from '@angular/core';
import { TokentradicionalService, Usuario  } from 'src/app/services/tokentradicional.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarioAutenticado: Usuario | null = null;
  usuario: any; 
  // username: string='';
  // name: string='';
  // favalbum: string='';
  // img: string='';
  // birth: Date | undefined;
  constructor(private TokentradicionalService: TokentradicionalService, private router: Router) { 
  }
  ngOnInit(): void {
    //this.usuarioAutenticado = this.TokentradicionalService.getUsuarioAutenticado();
    // this.username = this.TokentradicionalService.getUsername();
    // this.name = this.TokentradicionalService.getName();
    // this.birth = this.TokentradicionalService.getBirth();
    // this.img = this.TokentradicionalService.getImg();
    // this.favalbum = this.TokentradicionalService.getFavAlbum();
  }
  // salir(){
  //   this.TokentradicionalService.logout();
  //   this.router.navigateByUrl('/login');
  // }

    // logout(): void {
    //   this.TokentradicionalService.logout();
    // }
}