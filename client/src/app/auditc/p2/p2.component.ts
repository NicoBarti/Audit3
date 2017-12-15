import { Component, OnInit } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import {SumaPuntajeService} from '../suma-puntaje.service'

import { Router } from '@angular/router';


@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})

export class P2Component implements OnInit {

  constructor(private sumaPuntajeService: SumaPuntajeService,
                private router: Router) { }

  opciones = OpcionesPreguntas.p1
  model: number;

  ngOnInit() {
  }

  almacenaPuntaje() {
    this.sumaPuntajeService.setP2(this.model);
    this.router.navigate(['p3'])

  }

}
