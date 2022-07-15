import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import { Box, Container, Divider, FormControl, IconButton, Input, InputAdornment, InputLabel, Stack, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Axios from "axios";
import ModeIcon from '@mui/icons-material/Mode';

export default function FormAddCard() {
  const [open, setOpen] = React.useState(false);

  const [values, setValues] = React.useState({
    web: "",
    mail: "",
    user: "",
    password: "",
    name: "Add new Account"
  });

  const [flags, setFlags] = React.useState({
    showPassword: false,
    editNameField: false
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPassword = () => {
    Axios.post('http://localhost:5000/addpassword', {web: values.web, user: values.user, password: values.password});
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFlags({
      ...values,
      showPassword: !flags.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickEditName = () => {

  };

  return (
    <>
      <SpeedDial
            ariaLabel='formaddcard'
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
        <SpeedDialAction
        key={'add'}
        icon={<AddIcon/>}
        tooltipTitle={'add'}
        onClick={handleClickOpen}
        />
      </SpeedDial>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <DialogTitle> {values.name} </DialogTitle>
          <IconButton size='small' onClick={handleClickEditName}>
            <ModeIcon/>
          </IconButton>
        </Stack>
        <Divider/>
        <DialogContent>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography noWrap sx={{width: '200px'}}>
              Website address
            </Typography>
            <TextField
              autoFocus
              id="website"
              placeholder="Ex: www.site.com"
              type="website"
              fullWidth
              variant="standard"
              onChange={handleChange('web')}
            />
          </Stack>
          <Container sx={{mt: 4}}>
            <Typography>Account</Typography>
            <TextField
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              margin="dense"
              onChange={handleChange('mail')}
            />
            <TextField
              id="username"
              label="Username"
              type="username"
              fullWidth
              variant="standard"
              margin="dense"
              onChange={handleChange('user')}
            />
            <FormControl variant="standard" fullWidth margin="dense">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={flags.showPassword ? 'text' : 'password'}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="passwordVisibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {flags.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Container>

        </DialogContent>
        <DialogActions>
          <Button onClick={addPassword}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}