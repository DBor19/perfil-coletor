import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { ColetaComponent } from './coleta/coleta.component';
import { FotoperfilComponent } from './fotoperfil/fotoperfil.component';
import { CargaComponent } from './carga/carga.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    EnderecoComponent,
    ColetaComponent,
    FotoperfilComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
