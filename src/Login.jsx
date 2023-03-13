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

function Loggedin(){
  return (
    <div>
      <p>Logged in!</p>
    </div>
  );
}

NotLoggedin.propTypes = {
  login: PropTypes.func.isRequired,
};


function Login() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => oktaAuth.signInWithRedirect();

  if(!authState) {
    return <div>Loading...</div>;
  }

  if(!authState.isAuthenticated) {
    return <NotLoggedin login={login}/>
  }

  return <Loggedin/>;
}

export default Login;