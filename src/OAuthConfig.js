const OAuthConfig = {
  clientId: '',
  redirectUri: '',
  authEndpoint: '',
  tokenEndpoint: '',
  scope: '',
};

export const configureOAuth = (config) => {
  OAuthConfig.clientId = config.clientId;
  OAuthConfig.redirectUri = config.redirectUri;
  OAuthConfig.authEndpoint = config.authEndpoint;
  OAuthConfig.tokenEndpoint = config.tokenEndpoint;
  OAuthConfig.scope = config.scope;
};

export default OAuthConfig;
