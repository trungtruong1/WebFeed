import React from 'react';
import { Box, Grid, Paper, Typography, Button, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // You can add this icon if you want a sidebar toggle
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Blue color
        },
        secondary: {
            main: '#f44336', // Red color
        },
    },
});

const Home = () => {
    // const navigate = useNavigate();

    const handleLogout = () => {
        // Redirect to login page or perform any logout logic
        // For now, just redirect to login page
        // navigate('/login');
    };

    return (
        <ThemeProvider theme={theme}>
            <Box>
                {/* App Bar with Navigation */}
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            The News Homepage
                        </Typography>
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* Main Content */}
                <Container sx={{ mt: 5 }}>
                    <Grid container spacing={3}>
                        {/* Welcome Section */}
                        <Grid item xs={12} md={8}>
                            <Paper sx={{ p: 3 }}>
                                <Typography variant="h4" component="h1" gutterBottom>
                                    Welcome to The News!
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Stay updated with the latest and greatest stories from around the world. Our platform brings you
                                    breaking news, articles, and blogs from various sources.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    You can access news from multiple categories, including technology, health, politics, entertainment,
                                    and much more.
                                </Typography>
                            </Paper>
                        </Grid>

                        {/* Trending News Section */}
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 3 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Trending News
                                </Typography>
                                <ul>
                                    <li><Typography variant="body2">Tech Innovations in 2024</Typography></li>
                                    <li><Typography variant="body2">World Health Organization’s New Initiative</Typography></li>
                                    <li><Typography variant="body2">Political Shifts in Europe</Typography></li>
                                    <li><Typography variant="body2">Hollywood’s Latest Releases</Typography></li>
                                </ul>
                            </Paper>
                        </Grid>

                        {/* Additional Content or Call to Action */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 3 }}>
                                <Typography variant="h6">Join Us for the Latest Updates!</Typography>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                    Subscribe Now
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Home;
