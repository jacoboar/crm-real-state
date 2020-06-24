import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import AuthContext from '../../../context/auth/authContext';

const HeaderBar = styled.header`
  grid-area: header;
  min-height: 8vh;
  background-color: #fff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  padding: 1em;
  font-size: 1.2em;
  color: rgba(0, 0, 27, 0.8);
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    color: rgba(0, 0, 27, 1);
  }
`;

function Header() {
  const authContext = useContext(AuthContext);
  const { getUser, logout } = authContext;

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <HeaderBar>
      <Nav role='navigation'>
        <p>Hola</p>
        <NavLink to='/login' onClick={() => logout()}>
          Logout
        </NavLink>
      </Nav>
    </HeaderBar>
  );
}

export { Header };
