import React from 'react';
import { Box, Grid, Paper, Typography, TextField, Button, Link, createTheme, ThemeProvider } from '@mui/material';
import Logo from './Logo';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DAA520', // Gold color
    },
    secondary: {
      main: '#FFFFFF', // White color
    },
  },
});

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        {/* Header with Language Selection */}
        <Grid item xs={12}>
          <Box bgcolor="primary.main" py={1} textAlign="right" px={2}>
            <Button color="secondary">English</Button>
            <Button color="secondary">Español</Button>
          </Box>
        </Grid>

        {/* Centered Login Form and Introduction */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Grid container spacing={2} justifyContent="center">
            {/* Introduction Box */}
            <Grid item xs={12} md={6}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Paper elevation={0} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'secondary.main' }}>
                  <Logo />
                  <Typography variant="h6" sx={{ my: 2 }}>
                    Welcome to The News
                  </Typography>
                  <Typography variant="body1">
                    Stay updated with the latest and greatest stories from around the world.
                  </Typography>
                </Paper>
              </div>
            </Grid>

            {/* Login Form */}
            <Grid item xs={12} md={6}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Paper elevation={3} sx={{ p: 3, maxWidth: 400 }}>
                  <Typography variant="h5">Login to The News</Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField label="Email or phone number" fullWidth margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Log In</Button>
                    <Typography align="center" sx={{ mt: 1 }}>
                      <Link href="#">Forgot password?</Link>
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Create new account</Button>
                  </form>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;