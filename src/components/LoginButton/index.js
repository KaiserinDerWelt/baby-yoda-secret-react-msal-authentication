import React from 'react';
import { AuthConsumer } from "../Authentication";


// AuthConsumer will provide the status if the user is logged in or not
const LoginButton = () => {
  return (
    <AuthConsumer>
      {({ authenticated, login}) => (
        <nav className="navbar fixed-top navbar-expand-sm navbar-light">
          <div className="container">
            <div className="authenticationCheck">
             <div className="authenticationLayer">
                  {/* 
               This login button prevents no authenticated users to see the content 
              */}
              {authenticated ? (
                <>
                </>
              ) : (
                <button
                  className="btn btn-outline-primary my-2 my-sm-0 theForceButton"
                  onClick={login}
                >
                 DEPARTING TO ARVALA-7
                </button>
              )}
             </div>
            </div>
          </div>
        </nav>
      )}
    </AuthConsumer>
  );
};

export default LoginButton;
