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
import { Box, Divider, FormControl, IconButton, Input, InputAdornment, InputLabel, Stack, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function FormAddCard() {
  const [open, setOpen] = React.useState(false);

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
        <DialogTitle>Add new Account</DialogTitle>
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
            />
          </Stack>
          <Typography sx={{mt:3}}>Account</Typography>
          <Box>
            <TextField
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              margin="dense"
            />
            <TextField
              id="username"
              label="Username"
              type="username"
              fullWidth
              variant="standard"
              margin="dense"
            />
            <FormControl variant="standard" fullWidth margin="dense">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}