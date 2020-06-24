import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';

import { Sidebar } from '../../common/components/Sidebar';
import { MainContent } from '../../common/components/MainContent';
import { Properties } from './properties';
import { Clients } from './clients';
import { Owners } from './owners';
import { Bookings } from './bookings';

import AuthContext from '../../context/auth/authContext';

import { history } from '../../helpers';

const routes = [
  {
    path: "/panel/inmuebles",
    title: 'Inmuebles',
    component: () => <Properties></Properties>
  },
  {
    path: "/panel/propietarios",
    title: 'Propietarios',
    component: () => <Owners></Owners>
  },
  {
    path: "/panel/reservas",
    title: 'Reservas',
    component: () => <Bookings></Bookings>
  },
  {
    path: "/panel/clientes",
    title: 'Clientes',
    component: () => <Clients></Clients>
  }
];

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar header header'
    'sidebar content content'
    'sidebar footer footer';
  grid-template-columns: 20vw 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

function Panel() {
  const authContext = useContext(AuthContext);
  const { authenticated } = authContext;

  useEffect(() => {
    if (!authenticated) {
      history.push('/login');
    }
    // eslint-disable-next-line
  }, [authenticated]);

  return (
    <Layout>
      <Sidebar items={routes} />
      <MainContent items={routes} />
    </Layout>
  );
}

export { Panel };
