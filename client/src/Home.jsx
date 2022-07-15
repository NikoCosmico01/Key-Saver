import React from 'react';
import { Avatar, Box, Card, Container, Grid, IconButton } from '@mui/material';
import Navbar from './components/Navbar';
import AccountCard from './components/AccountCard';
import { Component } from 'react';
import FormAddCard from './components/FormAddCard';

class Home extends Component {
    state = {
        cards:[
            {id: 0, title: "Amazon", firstChar: "A"},
            {id: 1, title: "Twitter", firstChar: "T"},
            {id: 2, title: "Google", firstChar: "G"},
            {id: 3, title: "Linkedn", firstChar: "L"},
            {id: 4, title: "Twitch", firstChar: "T"},
            {id: 5, title: "Twitch", firstChar: "T"},
            {id: 6, title: "Twitch", firstChar: "T"},
            {id: 7, title: "Twitch", firstChar: "T"},
            {id: 8, title: "Twitch", firstChar: "T"},
            {id: 9, title: "Twitch", firstChar: "T"}
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
                            firstchar={card.firstChar} />
                        ))}
                    </Grid>    
                </Container>
                <FormAddCard/> 
                
            </Box>
        );
    }
}

export default Home;