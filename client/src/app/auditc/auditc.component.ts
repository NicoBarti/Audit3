import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Puntajes } from '../puntajes'
import { UsuarioService} from '../usuario.service'
import {Userinfo} from '../userinfo';

@Component({
  selector: 'app-auditc',
  templateUrl: './auditc.component.html',
  styleUrls: ['./auditc.component.css']
})
export class AuditcComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  model = new Puntajes('','','')
  userInfo = new Userinfo('','')

  ngOnInit() {
    this.usuarioService.get_userInfo().subscribe(res => {
      this.userInfo = {
          userid: res.json().data.id,
          username: res.json().data.name
        }
        console.log(this.userInfo)
      })
  }

  enviar() {
    console.log(
        this.model.p1
        this.model.p2
        this.model.p3
      )

  }

}
