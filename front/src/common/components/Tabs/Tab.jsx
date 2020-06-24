import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { tabContext } from './TabContext';

const TabButton = styled.button`
  flex-grow: 0;
  flex-shrink: 1;
`;

function Tab({ children, id }) {
  const { handleClick } = useContext(tabContext);

  const selectTab = () => {
    handleClick(id);
  };

  return <TabButton onClick={selectTab} type='button'>{children}</TabButton>;
}

export { Tab };
