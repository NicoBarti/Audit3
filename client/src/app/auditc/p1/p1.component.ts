import { Component, EventEmitter, Output } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import {SumaPuntajeService} from '../suma-puntaje.service'

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})

export class P1Component {

  @Output() siguientePregunta = new EventEmitter<boolean>();

  constructor(private sumaPuntajeService: SumaPuntajeService) { }

  opciones = OpcionesPreguntas.p1
  model: number;

  almacenaPuntaje() {
    this.sumaPuntajeService.setP1(this.model);
  }

  }
