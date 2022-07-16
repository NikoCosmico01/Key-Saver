import * as React from 'react';
import {Stack, AppBar, Toolbar, styled, Typography, Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Divider} from '@mui/material';
import { Key } from '@mui/icons-material';
import SearchItem from './SearchItem';
import { useState } from 'react';
import ProfileDialog from './ProfileDialog';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {

  const [open, setOpen] = React.useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 0 }}>
          <Key/>
          <Typography variant='h6'>Key Saver</Typography>
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center" sx={{ flexGrow: 0 }}>
            <SearchItem/>
            <Tooltip title="Open settings">
              <IconButton onClick={e=>setOpen(true)} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: 'dark'}}> AO </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              open={open}
              onClose={e=>setOpen(false)}
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
              <MenuItem /*Onclick*/ > Profile </MenuItem>
              <Divider variant="middle"/>
              <MenuItem /*Onclick*/ > Logout </MenuItem>
            </Menu>
          </Stack>
      </StyledToolBar>
    </AppBar>
  );
};
export default Navbar;
