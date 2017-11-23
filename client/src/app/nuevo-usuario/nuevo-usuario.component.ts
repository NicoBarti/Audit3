import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) {
          this._tokenService.init({
               registerAccountPath: '/api/auth'
             });
    }

  ngOnInit() {
  }

  register() {
     this._tokenService.registerAccount({
       email: 'test@example.com',
       password: 'password',
       passwordConfirmation: 'password'
    });
}

}
