import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Axios from "axios";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="">
        Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
  );
}

export default function signUpForm() {

  const resetMail = () => {
    setFlags({...flags, mailExist: false})
  }

  const resetPW = () => {
    setFlags({...flags, wrongPassword: false})
  }

  const [flags, setFlags] = React.useState({
    mailExist: false,
    wrongPassword: false
  });

  let finalResult = 0
  let responseLength = ""
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    Axios.get('http://localhost:5000/checksignup', { params: {email: data.get('email')}} )
    .then(response => {
            responseLength = response.data.length
            console.log(responseLength)
        })
    setTimeout(() => {
        if (responseLength > 0) {
            setFlags({...flags, mailExist: true})
            finalResult = 1
        }
        if (data.get('password') != data.get('repeatPassword')){
            setFlags({...flags, wrongPassword: true})
            finalResult = 1
        } 
        if (finalResult === 0) {
            Axios.post('http://localhost:5000/signup', {email:data.get('email'), password: data.get('password'), name: data.get('name'), surname: data.get('surname')});
        }
        }, 50);
    
  };
  
  return (
    <Grid container component="main" sx={{ height: '100vh'}}>
        <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6
        } square>
            <Box
                sx={{
                    height: '85vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5"> Sign up </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '60%'}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        error = {flags.mailExist}
                        onFocus= {resetMail}
                        label="Email Address"
                        autoFocus
                        size='small'
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        error = {flags.wrongPassword}
                        onFocus= {resetPW}
                        id="password"
                        name="password"
                        size='small'
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Repeat Password"
                        type="password"
                        error = {flags.wrongPassword}
                        onFocus= {resetPW}
                        id="repeatPassword"
                        name="repeatPassword"
                        size='small'
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Stack direction="row" justifyContent="space-between">
                        <TextField
                            margin="normal"
                            required
                            label="Name"
                            type="text"
                            id="name"
                            name="name"
                            size='small'
                            variant='standard'
                            sx={{width: "47%"}}
                        />
                        <TextField
                            margin="normal"
                            required
                            label="Surname"
                            type="text"
                            id="surname"
                            name="surname"
                            size='small'
                            variant='standard'
                            sx={{width: "47%"}}
                        />
                    </Stack>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                        <Link href="/login" variant="body2">
                            {"Already registered? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                </Box>
            </Box>
        </Grid>
    </Grid>
  );
}