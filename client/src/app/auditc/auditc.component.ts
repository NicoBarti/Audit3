import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Puntajes } from '../puntajes';
import { UsuarioService} from '../usuario.service';
import {Userinfo} from '../userinfo';
import {OpcionesPreguntas} from '../opciones-preguntas'



@Component({
  selector: 'app-auditc',
  templateUrl: './auditc.component.html',
  styleUrls: ['./auditc.component.css'],
  // providers: [OpcionesPreguntasService]
})

export class AuditcComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  // Inicia modelo con p1, p2, p3 y UserId
  model = new Puntajes(undefined,undefined,undefined,undefined);
  // Rescata opciones de pregunta definidas en clase publica
  opcionesP = OpcionesPreguntas
  //
  secuenciador = 1;

  ngOnInit() {
  this.usuarioService.get_userInfo().subscribe(res => {this.model.user_id = res.json().data.id})
  }

  enviar() {
    this.usuarioService.graba_audit(this.model)
  }

}
