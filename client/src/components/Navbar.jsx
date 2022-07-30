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

export default function Navbar() {

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
            <ProfileDialog/>
          </Stack>
      </StyledToolBar>
    </AppBar>
  );
};