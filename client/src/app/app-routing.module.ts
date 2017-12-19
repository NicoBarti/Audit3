import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { NuevoUsuarioSesionComponent } from './nuevo-usuario-sesion/nuevo-usuario-sesion.component';

import { HomeComponent } from './home/home.component';
import { AuditcComponent } from './auditc/auditc.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: 'sign-up', component: NuevoUsuarioComponent },
  { path: 'sign-in', component: NuevoUsuarioSesionComponent },
  {
     path: '',
     component: AuditcComponent,
     canActivate: [AuthGuard]
   },
   // { path: '**', component: PageNotFoundComponent }
 ];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
   providers: []
 })
 export class Audit3RoutingModule { }
