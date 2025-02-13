import React from 'react';
import OAuthConfig from './OAuthConfig';

const Login = () => {
  const handleLogin = () => {
    const authUrl = `${OAuthConfig.authEndpoint}?client_id=${OAuthConfig.clientId}&redirect_uri=${OAuthConfig.redirectUri}&response_type=code&scope=${OAuthConfig.scope}`;
    window.location.href = authUrl;
  };

  return (
    <button onClick={handleLogin}>Login with OAuth</button>
  );
};

export default Login;
