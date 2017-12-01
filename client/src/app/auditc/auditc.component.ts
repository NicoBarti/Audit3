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

  model = new Puntajes('','','','')
  userInfo = new Userinfo('','')

  ngOnInit() {
    this.usuarioService.get_userInfo().subscribe(res => {
      console.log(res)
      // this.model = {
      //   p1: '',
      //   p2: '',
      //   p3: '',
        // user_id: res.json().data.id
      }

      // this.userInfo = {
      //     userid: res.json().data.id,
      //     username: res.json().data.name
      //   }
        // console.log(this.model, 'modelo en auditc component')
      // })
  }

  enviar() {
    this.usuarioService.graba_audit(this.model
      // this.model.p1,
      // this.model.p2,
      // this.model.p3
    )

  }

}
