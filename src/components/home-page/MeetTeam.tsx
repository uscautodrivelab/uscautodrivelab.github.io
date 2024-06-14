import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  useTheme,
} from '@mui/material';
import dummy_profile_pic from '../../assets/dummy_profile_pic.jpg';

const teamMembers = [
  {
    name: 'Jane Doe',
    position: 'Lead Researcher',
    interests: 'Autonomous Vehicles, Machine Learning',
    image: dummy_profile_pic,
  },
  {
    name: 'John Smith',
    position: 'Software Engineer',
    interests: 'Computer Vision, Robotics',
    image: dummy_profile_pic,
  },
  {
    name: 'Alice Johnson',
    position: 'Data Analyst',
    interests: 'Data Analysis, AI Ethics',
    image: dummy_profile_pic,
  },
  {
    name: 'Bob Williams',
    position: 'Project Manager',
    interests: 'Team Coordination, Agile Management',
    image: dummy_profile_pic,
  },
  {
    name: 'Sarah Brown',
    position: 'UI/UX Designer',
    interests: 'User Experience, Interaction Design',
    image: dummy_profile_pic,
  },
  {
    name: 'Mike Davis',
    position: 'Systems Architect',
    interests: 'System Integration, Scalability Solutions',
    image: dummy_profile_pic,
  },
  {
    name: 'Emily White',
    position: 'Quality Assurance Engineer',
    interests: 'Automation Testing, Performance Metrics',
    image: dummy_profile_pic,
  },
  {
    name: 'Tom Clark',
    position: 'Network Specialist',
    interests: 'Network Security, Cloud Infrastructure',
    image: dummy_profile_pic,
  },
  {
    name: 'Zoe Adams',
    position: 'Research Intern',
    interests: 'Deep Learning, Natural Language Processing',
    image: dummy_profile_pic,
  },
];

export const MeetTeam: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        gap={2}
        flexWrap="wrap"
        sx={{
          width: '100%',
        }}
      >
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            sx={{
              '&:hover': {
                boxShadow: `0px 0px 20px ${theme.palette.primary.main}`,
              },
              maxWidth: 300,
              m: 1,
              flexBasis: { xs: '100%', sm: '50%', md: '33.33%' },
            }}
          >
            <CardMedia
              component="img"
              image={member.image}
              alt={member.name}
              sx={{ height: 150, width: '100%' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {member.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {member.position}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Focus: {member.interests}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
