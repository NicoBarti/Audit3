import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

import { Audit3RoutingModule } from './app-routing.module';
import { NuevoUsuarioFormaComponent } from './nuevo-usuario-forma/nuevo-usuario-forma.component';
import { NuevoUsuarioSesionComponent } from './nuevo-usuario-sesion/nuevo-usuario-sesion.component'

import { UsuarioService } from './usuario.service'

@NgModule({
  declarations: [
    AppComponent,
    NuevoUsuarioComponent,
    NuevoUsuarioFormaComponent,
    NuevoUsuarioSesionComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    Audit3RoutingModule,
    FormsModule
  ],
  providers: [Angular2TokenService,
              UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
