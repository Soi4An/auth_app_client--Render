import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';

const defaultTheme = createTheme({});

function PrivatePage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar />

      <Hero
        title={'Private Page'}
        text={'If you can see it, you are authorized.'}
      />
    </ThemeProvider>
  );
}

export default PrivatePage;
