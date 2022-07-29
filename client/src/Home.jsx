import React from 'react';
import { Avatar, Box, Card, Container, Grid, IconButton } from '@mui/material';
import Navbar from './components/Navbar';
import AccountCard from './components/AccountCard';
import { Component } from 'react';
import FormAddCard from './components/FormAddCard';
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            sessionId: "",
            account: []
        }
    }

    componentDidMount(){
        const response = fetch('http://localhost:5000');
        const json = response.json();
        this.setState({ account: json });
    }

    render() {
        return(
            <Box>
                <Navbar/>
                <Container sx={{mt: 4, mb: 4}}>
                    <Grid container justifyContent="center" alignItems="center" spacing={3}>
                        {this.state.account.map(account => (
                            <AccountCard
                            key={account.id}
                            title={account.title}
                            firstchar={(account.title)[0]}
                            username={account.username}
                            password={account.password}
                            />
                        ))}
                    </Grid>    
                </Container>
                <FormAddCard/> 
                
            </Box>
        );
    }
}

export default Home;