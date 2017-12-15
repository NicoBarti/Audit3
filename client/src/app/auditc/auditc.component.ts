import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Puntajes } from '../puntajes';
import { UsuarioService} from '../usuario.service';
import {Userinfo} from '../userinfo';
// import {SumaPuntajeService} from './suma-puntaje.service'

import {P1Component} from './p1/p1.component'



@Component({
  selector: 'app-auditc',
  templateUrl: './auditc.component.html',
  styleUrls: ['./auditc.component.css'],
  providers: []
})

export class AuditcComponent implements OnInit {

  constructor() { }

  // Inicia modelo con p1, p2, p3 y UserId
  // model = new Puntajes(undefined,undefined,undefined,undefined);
  // Rescata opciones de pregunta definidas en clase publica
  // opcionesP = OpcionesPreguntas
  //
  secuenciador = {
    p1: true,
    p2: false,
    p3: false
    };

  ngOnInit() {
  // this.usuarioService.get_userInfo().subscribe(res => {this.model.user_id = res.json().data.id})
  }

  // enviar() {
  //   this.usuarioService.graba_audit(this.model)
  // }

}
