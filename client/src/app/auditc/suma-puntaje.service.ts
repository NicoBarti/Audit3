import { Injectable } from '@angular/core';
import { Puntajes } from '../puntajes';
import { Router } from '@angular/router';

@Injectable()
export class SumaPuntajeService {

  private p1: number;
  private p2: number;
  private p3: number;
  // private auditC_puntaje: number;

  constructor( private router: Router ) { }

  setP1(p:number) {
    this.p1 = p
    console.log('p1 seteatdo' + this.p1 + 'p2 es' + this.p2)
  }

  setP2(p:number) {
    this.p2 = p
    console.log('p2 seteado' + this.p2 + 'p1 es' + this.p1)
  }

  setP3(p:number) {
    this.p3 = p
  }

  get_auditC_puntaje() {
    if(this.p1===undefined || this.p2===undefined || this.p3===undefined) {console.log('error en suma de puntajes, no se han respondido todas las preguntas')}
    else { return this.p1 + this.p2 + this.p3}
  }
}
