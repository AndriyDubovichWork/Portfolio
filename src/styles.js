import { createTheme } from '@mui/material/styles';

export const CreateMyTheme = (mainColor, fontColor) =>
  createTheme({
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
        main: mainColor,
        color: fontColor,
      },
      secondary: {
        main: mainColor,
        color: fontColor,
      },
    },
  });

export const darkTheme = CreateMyTheme('#0A1929', '#fff');
export const ligthTheme = CreateMyTheme('#fff', '#000');
