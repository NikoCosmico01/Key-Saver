import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';

export default function AddAccount() {
  return (
      <SpeedDial
          ariaLabel='addAccount'
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
      >
      <SpeedDialAction
      key={'add'}
      icon={<AddIcon/>}
      tooltipTitle={'add'}
      />
    </SpeedDial>
  );
}