import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import AccountCard from './components/AccountCard';

function Home() {
    return(
        <Box>
            <Navbar/>
            <Grid rowSpacing={1} columnSpacing={2}>
                <AccountCard/>
                <AccountCard/>
                <AccountCard/>
                <AccountCard/>
            </Grid>
        </Box>
    );
}

export default Home;