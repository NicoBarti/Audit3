import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class UsuarioService {

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      registerAccountPath: '/api/auth',
      validateTokenPath: '/api/auth/validate_token',
      signInPath: '/api/auth/sign_in'
    });
  }

  signIn(params) {
    this._tokenService.signIn(params).subscribe(res => {
      console.log(this._tokenService.currentUserData);
    });
  }

  registerAccount(params) {
      this._tokenService.registerAccount(params);
  }
}
