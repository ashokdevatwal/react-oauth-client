import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';
import OAuthConfig from './OAuthConfig';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async (code) => {
      try {
        const response = await axios.post(OAuthConfig.tokenEndpoint, {
          client_id: OAuthConfig.clientId,
          redirect_uri: OAuthConfig.redirectUri,
          grant_type: 'authorization_code',
          code,
        });
        login(response.data.access_token);
        navigate('/');
      } catch (error) {
        console.error('Error getting token:', error);
      }
    };

    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      fetchToken(code);
    }
  }, [login, navigate]);

  return <h1>Loading...</h1>;
};

export default Callback;
