import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private oauthService: OAuthService) { }

  public login(){
    this.oauthService.initImplicitFlowInternal();
  }
  public logout(){
    this.oauthService.logOut();
  }
}
