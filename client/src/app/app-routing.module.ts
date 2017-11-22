import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
 const routes: Routes = [
   { path: '', component: NuevoUsuarioComponent }
  ];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
   providers: []
 })
 export class Audit3RoutingModule { }
