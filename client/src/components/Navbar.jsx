import * as React from 'react';
import {Stack, AppBar, Toolbar, styled, Typography, InputBase, alpha} from '@mui/material';
import { Key } from '@mui/icons-material';
import ProfileDialog from './ProfileDialog';
import SearchIcon from '@mui/icons-material/Search';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 3, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '10ch',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

export default function Navbar() {
  const [searchText, setSearchText] = React.useState("")

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 0 }}>
          <Key/>
          <Typography variant='h6'>Key Saver</Typography>
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center" sx={{ flexGrow: 0 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <ProfileDialog/>
        </Stack>
      </StyledToolBar>
    </AppBar>
  );
};