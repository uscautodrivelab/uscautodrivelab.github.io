import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { HomePage } from './home-page/HomePage';

export const App: React.FC = ({}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#990000',
      },
      secondary: {
        main: '#FFCC00',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
};
