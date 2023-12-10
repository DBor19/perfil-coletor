import { EnderecoService } from './../service/endereco.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Usuario } from '../Model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { interval } from 'rxjs';
import { Endereco } from '../Model/endereco';


@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.component.html',
  styleUrls: ['./fotoperfil.component.css']
})
export class FotoperfilComponent {
  usuario: Usuario = new Usuario();
  endereco: Endereco = new Endereco();
  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuario = data
      console.log(data)
      console.log(this.usuario)
    }
      );

    this.enderecoService.getEndereco().subscribe((data)=> {
      this.endereco = data
      console.log(data)
      console.log(this.endereco)
    });
  }
  constructor(private usuarioService: UsuarioService, private cdr: ChangeDetectorRef,
    private enderecoService: EnderecoService) {
    interval(1000).subscribe(()=>{this.cdr.detectChanges})
  }
}

