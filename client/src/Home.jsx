import React from 'react';
import { Avatar, Box, Container, Grid, IconButton } from '@mui/material';
import Navbar from './components/Navbar';
import AccountCard from './components/AccountCard';
import AddAccount from './components/AddAccount';

function Home() {
    return(
        <Box>
            <Navbar/>
            <Container sx={{mt: 4, mb: 4}}>
                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                    <AccountCard/>
                    <AccountCard/>
                    <AccountCard/>
                    <AccountCard/>
                    <AccountCard/>
                    <AccountCard/>
                    <AccountCard/>
                    <AccountCard/>
                    <AccountCard/>
                </Grid>
                <AddAccount/>     
            </Container>
            
        </Box>
    );
}

export default Home;