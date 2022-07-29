import React from 'react';
import { Avatar, Box, Card, Container, Grid, IconButton } from '@mui/material';
import Navbar from './components/Navbar';
import AccountCard from './components/AccountCard';
import { Component } from 'react';
import FormAddCard from './components/FormAddCard';

class Home extends Component {
    state = {
        cards:[
            {id: 0, title: "Amazon", username: "", password: ""},
            {id: 1, title: "Twitter", username: "", password: ""},
            {id: 2, title: "Google", username: "", password: ""},
            {id: 3, title: "Linkedn", username: "", password: ""},
            {id: 4, title: "Twitch", username: "", password: ""}
        ]}
    render() {
        return(
            <Box>
                <Navbar/>
                <Container sx={{mt: 4, mb: 4}}>
                    <Grid container justifyContent="center" alignItems="center" spacing={3}>
                        {this.state.cards.map(card => (
                            <AccountCard
                            key={card.id}
                            title={card.title}
                            firstchar={(card.title)[0]}
                            username={card.username}
                            password={card.password}
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