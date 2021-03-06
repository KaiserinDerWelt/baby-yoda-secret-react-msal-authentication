import React from "react";
import * as Msal from "msal";
import { navigate, Redirect } from "@reach/router";

// Instantiate MSAL object
const myMSALObj = new Msal.UserAgentApplication(
  process.env.REACT_APP_MSFT_CLIENTID,
  process.env.REACT_APP_MSFT_AUTHORITY,
  { storeAuthStateInCookie: true, cacheLocation: "localStorage" }
);

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = {
    authenticated: false,
    wait: true,
    user: {}
  };

  componentDidMount = () => {
    // Check if we have a user, if so we are authenticated.
    // Used for page reloads to determine status.
    const user = myMSALObj.getUser();
    if (user) {
      this.setState({ authenticated: true, user: user });
    }
    this.setState({ wait: false });
  };

  // Using MSAL single sign on  method
  login = () => {
    myMSALObj.loginPopup(["user.read"]).then(idToken => {
      const user = myMSALObj.getUser();
      this.setState({ authenticated: true, user: user, wait: false });
      navigate("/mainpage"); // if you want to direct the user
    });
  };
   
  //Logout button method if needed
  //logout = () => {
    //sessionStorage.clear();
    //this.setState({ authenticated: false, user: {}, wait: false });
    //myMSALObj.logout(); // this *fully* logs you out from MSFT
  //};

  render = () => {
    return (
      <AuthContext.Provider
        value={{
          authenticated: this.state.authenticated,
          wait: this.state.wait,
          user: this.state.user,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  };
}

const AuthConsumer = AuthContext.Consumer;

// IMPORTANT: "wait" allows for AuthContext to determine our status
// on page reloads before we do anything. It won't render or
// redirect until we know if the user is authenticated. Otherwise
// we will be immediately redirected to the home and we don't wanna that.

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ authenticated, wait }) =>
      wait ? null : authenticated ? (
        <Component {...rest} />
      ) : (
        <Redirect from="" to="/" noThrow />
      )
    }
  </AuthConsumer>
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

export { AuthProvider, AuthConsumer, ProtectedRoute, PublicRoute };
