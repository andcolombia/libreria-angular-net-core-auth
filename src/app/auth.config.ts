// This api will come in the next version

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://authserver.govcotestauth.dns-cloud.net/pasarela',
  redirectUri: window.location.origin + '/index.html',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  clientId: 'spa-demoQA',
  responseType: 'code',
  scope: 'openid profile email offline_access ccd_api',
  showDebugInformation: true,
  sessionChecksEnabled: false,

  // timeoutFactor: 0.01,
};
