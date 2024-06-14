import React from 'react';
import { NavigationBar } from './NavigationBar';
import { MeetTeam } from './MeetTeam';
import { Box } from '@mui/material';
import { LabIntro } from './LabIntro';

export const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 0.5,
      }}
    >
      <NavigationBar />
      <LabIntro />
      <MeetTeam />
    </Box>
  );
};
