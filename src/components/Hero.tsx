import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
  title: string,
  text: string,
};

export default function Hero({ title, text }: Props) {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(180deg, #CEE5FD, #FFF)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h2"
            textAlign="center"
            variant="h2"
            sx={{ color: 'primary.main' }}
          >
            {title}
          </Typography>

          <Typography variant="body1" textAlign="center" color="text.secondary">
            {text}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
