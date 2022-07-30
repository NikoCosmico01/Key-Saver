import React from 'react';
import { Avatar, Box, Card, Container, Grid, IconButton } from '@mui/material';
import Navbar from './components/Navbar';
import AccountCard from './components/AccountCard';
import { Component } from 'react';
import FormAddCard from './components/FormAddCard';
import axios from 'axios';
import { RestorePageRounded } from '@mui/icons-material';

<<<<<<< HEAD
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            sessionId: "",
            accounts: []
        }
    }
=======
function Home(){
    const [accounts, setAccounts] = React.useState([]);
>>>>>>> parent of 8404700ba (ops)

    componentDidMount(){
        this.getAccountsList();
        console.log(this.state.accounts)
        /*fetch('http://localhost:5000/search')
            .then(response => {return response.json()})
            .then(data => {
                data.forEach(account => {

                })
            })
            .catch(err => console.log(err))*/
    }

    getAccountsList = () => {
        axios
            .get('http://localhost:5000/search')
<<<<<<< HEAD
            .then((response) => response.data)
            .then(response => this.setState({ accounts: response}))
    }

    render() {
        return(
            <Box>
                <Navbar/>
                <Container sx={{mt: 4, mb: 4}}>
                    <Grid container justifyContent="center" alignItems="center" spacing={3}>
                        {this.state.accounts.map(account => (
                            <AccountCard
                            key={account.id}
                            id={account.id}
                            title={account.title}
                            firstchar={account.title}
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
=======
            .then(response => {setAccounts(response.data)})
    });

    
    
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
>>>>>>> parent of 8404700ba (ops)
}

export default Home;