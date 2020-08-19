import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui'

import { Panel } from '../domain/panel';
import { Login } from '../domain/login';
import { Properties } from '../domain/panel/properties';
import { Property } from '../domain/panel/properties/Property';
import { Owners } from '../domain/panel/owners';
import { Clients } from '../domain/panel/clients';
import { Bookings } from '../domain/panel/bookings';

import AuthState from '../context/auth/authState';
import AlertState from '../context/alerts/alertState';
import PropertyState from '../context/properties/propertyState';

import { tokenAuth } from '../helpers';
import { history } from '../helpers';

import theme from './theme';
import GlobalStyles from './globalStyles';

const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthState>
        <AlertState>
          <PropertyState>
            <Router history={history}>
              <Switch>
                <Route exact path='/'>
                  <Redirect to='/panel' />
                </Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/panel' component={Panel}></Route>
                <Panel path='/panel/inmuebles' component={Properties}></Panel>
                <Panel
                  path='/panel/inmuebles/nueva-propiedad'
                  component={Property}></Panel>
                <Panel path='/panel/propietarios' component={Owners}></Panel>
                <Panel path='/panel/clientes' component={Clients}></Panel>
                <Panel path='/panel/reservas' component={Bookings}></Panel>
              </Switch>
            </Router>
          </PropertyState>
        </AlertState>
      </AuthState>
    </ThemeProvider>
  );
}

export { App };
