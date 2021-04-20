import React from 'react';
import { AuthConsumer } from "../Authentication";


// AuthConsumer will provide the status if the user is logged in or not
const LogoutButton = () => {
  return (
    <AuthConsumer>
      {({ authenticated,  logout}) => (
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
                  onClick={logout}
                >
                 GOING FOR CHICKEN NUGGIE'S
                </button>
              )}
             </div>
            </div>
          </div>
      )}
    </AuthConsumer>
  );
};

export default LogoutButton;