import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';

const Main = styled.main`
  grid-area: content;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

function MainContent({ items }) {
  return (
    <Fragment>
      <Header></Header>
      <Main role='main'>
        <Switch>
          {items.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              component={item.component}
            />
          ))}
        </Switch>
      </Main>
      <Footer></Footer>
    </Fragment>
  );
}

export { MainContent };
