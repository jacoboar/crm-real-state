import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { darken } from 'polished';

const Aside = styled.aside`
  grid-area: sidebar;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
`;

const NavLink = styled(Link)`
  padding: 1em;
  font-size: 1.2em;
  font-weight: 600;
  color: rgba(0, 0, 27, 0.8);
  text-decoration: none;
  transition: all 0.5s ease;
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    color: rgba(0, 0, 27, 1);
    background-color: ${(props) => darken(0.2, props.theme.colors.primary)};
  }
`;

function Sidebar({ items }) {
  return (
    <Aside>
      <Nav>
        {items.map((item, index) => (
          <NavLink key={index} to={item.path}>{item.title}</NavLink>
        ))}
      </Nav>
    </Aside>
  );
}

export { Sidebar };
