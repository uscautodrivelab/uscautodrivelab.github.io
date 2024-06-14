import { Box, Typography, Paper } from '@mui/material';
import React from 'react';
import usc_background from '../../assets/usc_background.jpg';

export const LabIntro: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        margin: 2,
        backgroundImage: `url(${usc_background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          USC AutoDrive Lab
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Our Mission & Purpose
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          At the USC AutoDrive Lab, we aim to advance the field of autonomous
          driving through innovative research and collaborative projects. Our
          goal is to develop technologies that improve the safety, efficiency,
          and performance of self-driving vehicles while engaging with the
          broader community to foster understanding and enthusiasm about the
          future of transportation.
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="subtitle2" gutterBottom>
          About This Website
        </Typography>
        <Typography variant="body2">
          This website is a portal to share our breakthroughs, project updates,
          and research insights with the academic community and the public. It
          provides resources, publications, and information about our team and
          ongoing projects.
        </Typography>
      </Box>
    </Paper>
  );
};
