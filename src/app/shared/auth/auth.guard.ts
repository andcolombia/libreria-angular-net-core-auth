import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private oauthService: OAuthService) {}

  canActivate() {
    if (
      this.oauthService.hasValidAccessToken() &&
      this.oauthService.hasValidIdToken()
    ) {
      return true;
    } else {

    //   // Tweak config for implicit flow
    // this.oauthService.configure(authConfig);
    // await this.oauthService.loadDiscoveryDocument();
    // sessionStorage.setItem('flow', 'implicit');

    // this.oauthService.initLoginFlow('/some-state;p1=1;p2=2?p3=3&p4=4');
    // // the parameter here is optional. It's passed around and can be used after logging in

      this.router.navigate(['/home', { login: true }]);
      return false;
    }
  }
}
