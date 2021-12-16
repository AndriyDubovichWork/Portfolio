import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Bakbak One',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#0A1929',
      color: '#fff',
    },
    secondary: {
      main: '#0A1929',
      color: '#fff',
    },
  },
});
export const ligthTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Bakbak One',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#fff',
      color: '#000',
    },
    secondary: {
      main: '#fff',
      color: '#000',
    },
  },
});
