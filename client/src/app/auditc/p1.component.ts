import { Component, OnInit } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import { UsuarioService} from '../usuario.service';
import {Observable} from 'rxjs/Observable';
import { Puntajes } from '../puntajes';




@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  opciones = OpcionesPreguntas.p1
  model = new Puntajes(undefined,undefined,undefined,undefined);

  ngOnInit() {
    this.usuarioService.get_userInfo().subscribe(res => {this.model.user_id = res.json().data.id})
  }

  enviar() {
    console.log(this.model)
    this.usuarioService.graba_audit(this.model)
  }

}
