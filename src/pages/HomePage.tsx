import { useEffect } from 'react';

import AppAppBar from './../components/AppAppBar';
import LogoCollection from './../components/LogoCollection';
import Footer from './../components/Footer';
import Hero from './../components/Hero';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../utils/redux/store';
import { clearMethod } from '../utils/redux/userSlice';
import { Container, Typography } from '@mui/material';

const defaultTheme = createTheme({});

export default function HomePage() {
  const { user, method } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user && method) {
      dispatch(clearMethod());
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar />
      
      <Hero
        title={'Home Page'}
        text={'You can see it, because this page is public.'}
      />

      <Container sx={{ mt: 10, bgcolor: 'background.default' }}>
        <Divider />
        
        <Typography
          component="h2"
          variant="h5"
          color="text.secondary"
          sx={{ mt: 5 }}
        >
          1. This is the first general information.
        </Typography>

        <LogoCollection />
        <Divider />

        <Typography
          component="h2"
          variant="h5"
          color="text.secondary"
          sx={{ mt: 5 }}
        >
          2. This is the second general information.
        </Typography>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
