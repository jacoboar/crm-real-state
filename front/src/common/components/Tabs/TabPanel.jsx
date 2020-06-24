import React, { useContext } from 'react';

import { tabContext } from './TabContext';

function TabPanel({ children, id }) {
  const { activeId } = useContext(tabContext);

  return <>{activeId === id && children}</>;
}

export { TabPanel };
