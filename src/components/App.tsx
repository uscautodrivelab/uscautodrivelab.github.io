import React from 'react';
import { ResponsiveBox } from './lib/ResponsiveBox';
import { NavigationBar } from './navigation-bar/NavigationBar';
import { ThemeProvider, createTheme } from '@mui/material';

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
      <ResponsiveBox>
        <NavigationBar />
      </ResponsiveBox>
    </ThemeProvider>
  );
};
