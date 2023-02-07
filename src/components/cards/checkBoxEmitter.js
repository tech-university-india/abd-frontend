import React from 'react';
import { Checkbox, Box } from '@mui/material';

function CheckBoxEmitter(chck) {
  return (
    <Box>
      {chck === true ? (
        <Checkbox color='primary' size="large" />
      ) : (<Checkbox color='primary' size="large" sx={{ visibility: 'hidden' }} />)
      }
    </Box>
  );
};

export default CheckBoxEmitter;