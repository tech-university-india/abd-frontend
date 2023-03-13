import React from 'react';
import PropTypes from 'prop-types';
import { useOktaAuth } from '@okta/okta-react';

function NotLoggedin({login}){
  return (
    <div>
      <p>Not logged in!</p>
      <button type='button' onClick={login}>Login</button>
    </div>
  );
}

function Loggedin({logout}){
  return (
    <div>
      <p>Logged in!</p>
      <button type='button' onClick={logout}>Logout</button>
    </div>
  );
}

NotLoggedin.propTypes = {
  login: PropTypes.func.isRequired,
};


Loggedin.propTypes = {
  logout: PropTypes.func.isRequired,
};

function Login() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => oktaAuth.signInWithRedirect();
  const logout = async () => oktaAuth.signOut('/');

  if(!authState) {
    return <div>Loading...</div>;
  }

  if(!authState.isAuthenticated) {
    return <NotLoggedin login={login}/>
  }

  return <Loggedin logout={logout}/>;
}

export default Login;