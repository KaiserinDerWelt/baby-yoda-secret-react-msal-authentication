import React from "react";
import { Router } from "@reach/router";

// Authentication
import {
  AuthProvider,
  ProtectedRoute,
} from "./components/Authentication";

// components
import LoginButton from "./components/LoginButton";
import Home from "./components/Home";

const App = () => (
  <div className="hommieBabyYoda">
    <audio  autoPlay className="audioControl">
  <source src="css/StarWarsThemeSongByJohnWilliams.mp3" type="audio/mpeg"></source>
</audio>
    <AuthProvider>
      <LoginButton/>
      <Router>
        <ProtectedRoute path="/mainpage" component={Home} />
      </Router>
    </AuthProvider>
  </div>
);

export default App;
