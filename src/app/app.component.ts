import { Component } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keycloak-frontend';

  username: string = '';
  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private oauthService: OAuthService,
    private messageService: MessageService) {
    this.configure()
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8180/auth/realms/tutorial',
    redirectUri: window.location.origin,
    clientId: 'tutorial-frontend',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };
  configure(){
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument()
      .then(() => this.oauthService.tryLogin())
      .then(() => {
        if(this.oauthService.getIdentityClaims()){
          this.isLogged = this.getIsLogged();
          this.isAdmin = this.getIsAdmin();
          this.username = this.oauthService.getIdentityClaims()['preferred_username'];
          this.messageService.sendMessage(this.oauthService.getIdentityClaims()['preferred_username']);
        }
      });
  }
  
  public getIsLogged(): boolean{
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getIsAdmin(): boolean {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    return payloadDecoded.realm_access.roles.indexOf('realm-admin') !== -1;
  }
}
