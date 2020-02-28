import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route 
          exact path="/" 
          component={Home} 
        />
        <Route  
          exact path="/user/:user"
          component={User} 
        />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
