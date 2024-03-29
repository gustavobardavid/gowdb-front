import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/font.css';
import { Link } from 'react-router-dom';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? '#000'
                  : '#A5AEB6',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img src="gowdblogo.png" alt="" style={{width:'70px'}}/>
             <Typography className='logo' variant="h5" color="#fff" style={{fontFamily:'gow-font'}}>
                   
                  </Typography>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                className='logo'
                  onClick={() => scrollToSection('features')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Link to="/games" style={{ textDecoration: 'none' }}>
                  <Typography className='logo'  color="#fff" style={{fontFamily:'gow-font'}}>
                    Games
                  </Typography>
                  </Link>

                </MenuItem>
                
                <MenuItem
                className='logo'
                  onClick={() => scrollToSection('header')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Link to="/characters" style={{ textDecoration: 'none' }}>
                  <Typography className='logo' color="#fff" style={{fontFamily:'gow-font'}}>
                    Characters
                  </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                className='logo'
                  onClick={() => scrollToSection('header')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Link to="/items" style={{ textDecoration: 'none' }}>
                  <Typography className='logo' color="#fff" style={{fontFamily:'gow-font'}}>
                    Items
                  </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                className='logo'
                  onClick={() => scrollToSection('header')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Link to="/enemies" style={{ textDecoration: 'none' }}>
                  <Typography className='logo' color="#fff" style={{fontFamily:'gow-font'}}>
                    Enemies
                  </Typography>
                  </Link>
                </MenuItem>
                
                <MenuItem
                  onClick={() => scrollToSection('pricing')}
                  sx={{ py: '6px', px: '12px' }}
                >
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
             <Link to="/docs" style={{ textDecoration: 'none' }}>
              <Button
                color="error"
                variant="contained"
                size="small"
                component="a"
                target="_blank" 
                style={{fontFamily:'gow-font'}}
                >
                Get Started
              </Button>
                </Link>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="error"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: '#A5AEB6',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                  </Box>
                  <Link to="/games" style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={() => scrollToSection('features')} style={{fontFamily:'gow-font'}}>
                      Games
                    </MenuItem>
                  </Link>
                  <Link to="/characters" style={{ textDecoration: 'none' }}>
                  <MenuItem onClick={() => scrollToSection('features')} style={{fontFamily:'gow-font'}}>
                    Characters
                  </MenuItem>
                  </Link>
                  <Link to="/items" style={{ textDecoration: 'none' }}>
                  <MenuItem onClick={() => scrollToSection('features')} style={{fontFamily:'gow-font'}}>
                    Items
                  </MenuItem>
                  </Link>
                  <Link to="/enemies" style={{ textDecoration: 'none' }}>
                  <MenuItem onClick={() => scrollToSection('features')} style={{fontFamily:'gow-font'}}>
                    Enemies
                  </MenuItem>
                  </Link>

                  <Divider />
      
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;