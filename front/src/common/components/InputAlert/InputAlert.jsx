/** @jsx jsx */
import React from 'react';
import { Box, jsx, useThemeUI } from 'theme-ui';

function InputAlert({ msg, category }) {
  const { theme } = useThemeUI();

  const getAlertColor = (category) => {
    switch (category) {
      case 'error':
        return theme.colors.danger;
      default:
        return '#000';
    }
  };

  return (
    <Box mt={1} color={getAlertColor(category)}>
      <p
        sx={{
          fontSize: '0.85em',
        }}>
        {msg}
      </p>
    </Box>
  );
}

export { InputAlert };
