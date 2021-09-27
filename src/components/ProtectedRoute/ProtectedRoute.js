import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.isAuth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>
  );
};
