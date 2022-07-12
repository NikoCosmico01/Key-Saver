import * as React from 'react';
import {Stack, AppBar, Toolbar, styled, Typography, Box, Tooltip, IconButton, Avatar, Menu, MenuItem} from '@mui/material';
import { Key } from '@mui/icons-material';
import SearchItem from './SearchItem';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
      </StyledToolBar>
    </AppBar>
  );
};
export default Navbar;
