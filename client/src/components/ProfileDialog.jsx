import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar, Box, Container, Divider, FormControl, IconButton, Input, InputAdornment, InputLabel, Menu, MenuItem, Stack, Tooltip, Typography } from '@mui/material';
import { Save, Visibility, VisibilityOff } from '@mui/icons-material';
import Axios from "axios";

export default function ProfileDialog() {
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <>
        <Tooltip title="Open settings">
            <IconButton onClick={()=>setOpen(true)} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: 'dark'}}> AO </Avatar>
            </IconButton>
        </Tooltip>
        <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              open={open}
              onClose={()=>setOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
        >
            <MenuItem onClick={()=>setOpenDialog(true)}> Profile </MenuItem>
            <Divider variant="middle"/>
            <MenuItem /*Onclick*/ > Logout </MenuItem>
        </Menu>
        <Dialog open={openDialog} fullWidth>
            <DialogTitle>Profile</DialogTitle>
            <Divider/>
            <DialogContent>
            </DialogContent>
            <DialogActions>
            <Button size="large" color="error" onClick={()=>{setOpenDialog(false); setOpen(false)}}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </>
  );
}