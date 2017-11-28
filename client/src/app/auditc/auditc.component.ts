import { Component, OnInit } from '@angular/core';

import { Puntajes } from '../puntajes'

@Component({
  selector: 'app-auditc',
  templateUrl: './auditc.component.html',
  styleUrls: ['./auditc.component.css']
})
export class AuditcComponent implements OnInit {

  model = new Puntajes('','','')

  constructor() { }

  ngOnInit() {
  }

  enviar() {
    console.log(
        this.model.p1
        this.model.p2
        this.model.p3
      )

  }

}
