import React from 'react';
import { Switch } from 'react-router-dom';

/* Routes */
import MyRoute from './MyRoute';

/* Pages */
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

function Routes() {
  return (
    <Switch>
      <MyRoute path="/" component={Login} exact />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

export default Routes;
