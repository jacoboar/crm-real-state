import { darken, lighten } from '@theme-ui/color';

export default {
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Oswald', 'Open Sans', sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  fontWeights: {
    body: 400,
    heading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#392a25',
    muted: '#aaaaaa',
    background: '#f4f4f4',
    foreground: '#ffffff',
    primary: '#45a5dd',
    secondary: '#9f8a6d',
    danger: '#ef0000',
    success: '#00aa4b',
    warning: '#ff7900',
  },
  space: [0, 2, 4, 8, 16, 32, 48],
  breakpoints: ['40em', '64em', '80em'],
  buttons: {
    primary: {
      position: 'relative',
      color: 'background',
      cursor: 'pointer',
      transition: '0.3s all ease',
      height: '3em',
      bg: 'primary',
      '&:hover': {
        bg: darken('primary', 0.1),
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
    fullWidth: {
      width: '100%',
    },
  },
  forms: {
    input: {
      height: '3em',
      border: '2px solid',
      borderColor: 'primary',
      '&:focus': {
        border: '4px solid',
        borderColor: darken('primary', 0.1),
      },
    },
  },
  alerts: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    danger: {
      color: 'danger',
      bg: lighten('danger', 0.4),
      fontWeight: 400,
    },
  },
};
