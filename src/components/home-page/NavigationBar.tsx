import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Button,
  ButtonBase,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import BiotechIcon from '@mui/icons-material/Biotech';
import usc_logo from '../../assets/usc_logo.png';

export const NavigationBar: React.FC = () => {
  const pages = ['Research Digest', '[Blank]', '[Blank]', 'Contact Us'];
  const pageIcons = [<BiotechIcon />, null, null, <EmailIcon />];
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleClick = () => {
    console.log('Button Clicked.');
  };

  const listMenuOptions = () => (
    <Box
      sx={{ width: 'auto' }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem button key={text} onClick={handleClick}>
            {pageIcons[index] && (
              <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px' }}>
                {pageIcons[index]}
              </ListItemIcon>
            )}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ButtonBase
          onClick={handleClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0.5,
            borderRadius: '4px',
          }}
        >
          <img src={usc_logo} style={{ height: 30, marginRight: 10 }} />
          <Typography variant="h5">AutoDrive Lab</Typography>
        </ButtonBase>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="small"
            onClick={toggleDrawer(true)}
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
            {listMenuOptions()}
          </Drawer>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
          }}
        >
          {pages.map(page => (
            <Button
              key={page}
              onClick={handleClick}
              sx={{ color: 'white', marginRight: 2 }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// ToDo:
// add routing for menu pages and homepage
