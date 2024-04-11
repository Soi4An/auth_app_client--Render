/* eslint-disable max-len */

import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { useAppSelector } from '../utils/redux/store';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [isUser, setIsUser] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigateTo = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  React.useEffect(() => {
    setIsUser(!!user);
  }, [user]);

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
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)',
            }}
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
              <img
                src={
                  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
                onClick={() => navigate('/')}
              />

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  component={Link}
                  to="/"
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    HomePage
                  </Typography>
                </MenuItem>

                <MenuItem
                  component={Link}
                  to="/private"
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    PrivatePage
                  </Typography>
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
              {!isUser && (
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  component={Link}
                  to="/login"
                >
                  Sign in
                </Button>
              )}

              <Button
                color="primary"
                variant="contained"
                size="small"
                component={Link}
                to={isUser ? '/profile' : '/register'}
              >
                {isUser ? 'Account' : 'Sign up'}
              </Button>
            </Box>

            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
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
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <MenuItem onClick={() => navigateTo('/')}>HomePage</MenuItem>

                  <MenuItem onClick={() => navigateTo('/private')}>
                    PrivatePage
                  </MenuItem>

                  <Divider />

                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      component={Link}
                      fullWidth
                      to={isUser ? '/profile' : '/register'}
                    >
                      {isUser ? 'Account' : 'Sign up'}
                    </Button>
                  </MenuItem>

                  <MenuItem>
                    {!isUser && (
                      <Button
                        color="primary"
                        variant="outlined"
                        size="small"
                        fullWidth
                        component={Link}
                        to="/login"
                      >
                        Sign in
                      </Button>
                    )}
                  </MenuItem>
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
