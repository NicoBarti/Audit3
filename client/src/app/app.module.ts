import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

import { Audit3RoutingModule } from './app-routing.module.ts'

@NgModule({
  declarations: [
    AppComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    Audit3RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
