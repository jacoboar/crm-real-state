import React from 'react';
import { Spinner } from 'theme-ui'

function Loader() {
  return (
    <Spinner
      sx={{
        color: 'foreground'
      }}
      size={20}
    />
  );
}

export { Loader };
