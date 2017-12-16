import { Component, OnInit } from '@angular/core';
import {OpcionesPreguntas} from '../opciones-preguntas'
import {SumaPuntajeService} from '../suma-puntaje.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css']
})

export class P3Component implements OnInit {

  constructor(private sumaPuntajeService: SumaPuntajeService,
              private router: Router) { }

  opciones = OpcionesPreguntas.p1
  model: number;

  ngOnInit() {
  }

  almacenaPuntaje() {
    this.sumaPuntajeService.setP3(this.model);
    this.router.navigate(['home'])
  }


}
