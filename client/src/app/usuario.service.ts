import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';
import {Jsonp} from '@angular/http';
// import {Userinfo} from './userinfo';
import {Observable} from 'rxjs';


@Injectable()
export class UsuarioService {

  constructor(private _tokenService: Angular2TokenService,
              private router: Router) {
    this._tokenService.init({
      registerAccountPath: '/api/auth',
      validateTokenPath: '/api/auth/validate_token',
      signInPath: '/api/auth/sign_in',
    });
  };

  // userinfo = new Userinfo('','')

  signIn(params) {
    this._tokenService.signIn(params).subscribe(res => {
      // this.set_userInfo(res)
      this.router.navigate(['']);
    });
  };

  registerAccount(params) {
      this._tokenService.registerAccount(params).subscribe(res => {
        // this.set_userInfo(res)
        this.router.navigate(['']);
      });
  };

  // set_userInfo(res) {
  //   this.userInfo = {
  //     userid: res.json().data.id,
  //     username: res.json().data.name
  //   }
  // };


  get_userInfo(): Observable<datosUsuario[]> {
      return  this._tokenService.get('/api/auth/validate_token')
  };

}
