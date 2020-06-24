import React, { Fragment } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import { history } from '../../../helpers';

import { Property } from './Property';
import { PropertiesList } from './PropertiesList';

function Properties() {
  let { path, url } = useRouteMatch();

  return (
    <Fragment>
      <p onClick={() => history.goBack()}>Volver</p>
      <Link to={`${url}/nueva-propiedad`}>Nueva Propiedad</Link>

      <Switch>
        <Route exact path={path}>
          <PropertiesList />
        </Route>
        <Route path={`${path}/nueva-propiedad`}>
          <Property />
        </Route>
      </Switch>
    </Fragment>
  );
}

export { Properties };
