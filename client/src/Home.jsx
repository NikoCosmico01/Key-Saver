import * as React from 'react';
import { Box, Container, Grid} from '@mui/material';
import Navbar from './components/Navbar';
import AccountCard from './components/AccountCard';
import FormAddCard from './components/FormAddCard';
import axios from 'axios';
import { useEffect } from 'react';
import { useCallback } from 'react';

function Home(){
    const [values, setValues] = React.useState({
        accounts: [],
        searchText: "",
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            axios
            .get('http://localhost:5000/search')
            .then(response => {setValues({accounts: response.data})})
        }, 2000);
        return () => clearTimeout(timer);
    });

    const decryptPassword = (encryption) => {
        axios.post('http://localhost:5000/decryptpassword', { 
            password: encryption.password,
            iv: encryption.iv 
        }).then((response) => {
            return response.data
        });
    };

    /*const pull_data = (data) => {
        console.log(data);
    } */ 
    
    return(
        <Box>
            <Navbar /*func={pull_data}*//>
            <Container sx={{mt: 4, mb: 4}}>
                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                    {values.accounts.map(account => (
                        <AccountCard
                        key={account['ID']}
                        title={account['Name']}
                        web={account['Web']}
                        username={account['User']}
                        password={decryptPassword({password: account['Password'], iv: account['IV']}) }
                        />
                    ))}
                </Grid>    
            </Container>
            <FormAddCard/> 
        </Box>
    );
}
export default Home;