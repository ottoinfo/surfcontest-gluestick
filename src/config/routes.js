/* @flow */
import React from "react";
import { Route, IndexRoute } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "gluestick-shared";

import MasterLayout from "components/MasterLayout";
import HomeApp from "containers/HomeApp";
import Contest from "containers/Contest";
import NoMatchApp from "containers/NoMatchApp";

export default function routes (/*store:Object*/) {
  return (
    <Route name="app" component={MasterLayout} path="/">
      <IndexRoute name="home" component={HomeApp} />
      <Route name="contest" path="contest" component={Contest} />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp}/>
    </Route>
  );
}

