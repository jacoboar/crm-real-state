import { createContext } from 'react';

const tabContext = createContext({
  activeId: '',
  handleClick: () => {},
});

export { tabContext };
