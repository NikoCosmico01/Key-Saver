import * as React from 'react';
import { Box, Container, Grid} from '@mui/material';
import Navbar from './components/Navbar';
import AccountCard from './components/AccountCard';
import FormAddCard from './components/FormAddCard';
import axios from 'axios';
import { useEffect } from 'react';

function Home(){
    const [values, setValues] = React.useState({
        allAccounts: [],
        displayedAccounts: [],
        searchText: ""
    })

    useEffect(() => {
        axios
        .get('http://localhost:5000/search')
        .then(response => {setValues({
            ...values,
            allAccounts: response.data, 
            displayedAccounts: response.data})})
    }, []);

    const updateScreen = () => {
        axios
        .get('http://localhost:5000/search')
        .then(response => {setValues({
            ...values,
            allAccounts: response.data,
            displayedAccounts: response.data})})
    }

    const searchAccount = (e) => {
        const search = e.target.value;
        const searchAccount = [];
        if(search != ""){
            values.allAccounts.forEach(account => {
                if(account['Name'].toLowerCase().startsWith(search.toLowerCase())) searchAccount.push(account)
            })
            setValues({...values, displayedAccounts: searchAccount});
        }
        else{
            setValues({...values, displayedAccounts: values.allAccounts});
        }
    }

    const handleDeleteAccount = (idCard) => {
        axios
        .get('http://localhost:5000/deleteAccount', {params: {id: idCard}})
        .then(response => {
            if(response.data == "OK"){
                updateScreen();
            }
        }
        )
    }

    return(
        <Box>
            <Navbar pushData={searchAccount}/>
            <Container sx={{mt: 4, mb: 4}}>
                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                    {values.displayedAccounts.map(account => (
                        <AccountCard
                        key={account['ID']}
                        id={account['ID']}
                        name={account['Name']}
                        web={account['Web']}
                        username={account['User']}
                        password={account['Password']}
                        website={account['Web']}
                        deleteAccount={handleDeleteAccount}
                        />
                    ))}
                </Grid>    
            </Container>
            <FormAddCard handleClickSave={updateScreen}/> 
        </Box>
    );
}
export default Home;