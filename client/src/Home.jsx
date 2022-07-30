import React from 'react';
import { Avatar, Box, Card, Container, Grid, IconButton } from '@mui/material';
import Navbar from './components/Navbar';
import AccountCard from './components/AccountCard';
import { Component } from 'react';
import FormAddCard from './components/FormAddCard';
import axios from 'axios';
import { RestorePageRounded } from '@mui/icons-material';


function Home(){
    const [accounts, setAccounts] = React.useState([]);
}

    getAccountsList = () => {
        axios
            .get('http://localhost:5000/search')
            .then((response) => response.data)
            .then(response => this.setState({ accounts: response}))
    }

    
    
    return(
        <Box>
            <Navbar/>
            <Container sx={{mt: 4, mb: 4}}>
                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                    {accounts.map(account => (
                        <AccountCard
                        key={account['ID']}
                        title={account['Name']}
                        firstchar={account['Name'][0]}
                        username={account['Name']}
                        password={account['Password']}
                        />
                    ))}
                </Grid>    
            </Container>
            <FormAddCard/> 
            
        </Box>
    );


export default Home;