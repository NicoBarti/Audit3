import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-nuevo-usuario-forma',
  templateUrl: './nuevo-usuario-forma.component.html',
  styleUrls: ['./nuevo-usuario-forma.component.css']
})
export class NuevoUsuarioFormaComponent implements OnInit {

  model = new Usuario('', '', '');

  constructor(private _tokenService: Angular2TokenService) {
      this._tokenService.init({
         registerAccountPath: '/api/auth',
         validateTokenPath: '/api/auth/validate_token'
       });
      }

  ngOnInit() {
  }

  register() {
     this._tokenService.registerAccount({
       email:                this.model.email,
       password:             this.model.password,
       passwordConfirmation: this.model.password
    });
  }

}
