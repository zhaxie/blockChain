import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.

import Login from '../pages/client/Login/app'
import Layout from '../layout/app'
import MyBaseInfo from '../pages/client/MyBaseInfo/app'

const routes = [
  {
    path: "/client/Login",
    component: Login,
  },
  {
    path: "/layout",
    component: Layout,
    routes: [
      {
        path: "/layout/MyBaseInfo",
        component: MyBaseInfo
      },
    ]
  }

];

export default function RouteConfigExample() {
  return (
    <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
