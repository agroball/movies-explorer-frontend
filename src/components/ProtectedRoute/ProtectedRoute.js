import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({...routeProps}) => {
  const logged = localStorage.getItem("loggedIn");
    return logged ? <Route {...routeProps} /> : <Redirect to="/"/>
  };

export default ProtectedRoute;