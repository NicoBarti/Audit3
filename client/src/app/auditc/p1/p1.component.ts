import { Component, EventEmitter, Output } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import {SumaPuntajeService} from '../suma-puntaje.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})

export class P1Component {

  constructor(private sumaPuntajeService: SumaPuntajeService,
              private router: Router) { }

  opciones = OpcionesPreguntas.p1
  model: number;

  almacenaPuntaje() {
    this.sumaPuntajeService.setP1(this.model);
    this.router.navigate(['p2'])
  }

  }
