import React, { useState } from 'react';

import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

import { tabContext } from './TabContext';

const { Provider } = tabContext;

function Tabs({ children }) {
  const [activeId, setActiveId] = useState('a');

  const handleClick = (id) => {
    setActiveId(id);
  };

  return <Provider value={{ activeId, handleClick }}>{children}</Provider>;
}

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export { Tabs };
