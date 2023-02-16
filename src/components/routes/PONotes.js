import React from 'react';
import { Box } from '@mui/material';
import PONotesBody from '../poNotesComponents/PONotesBody';
import PONotesHeader from '../poNotesComponents/PONotesHeader';

export default function PONotesContainer() {

  return (
    <Box>
      <Box sx={{ m: -2, p: 4 }}>
        <PONotesHeader />
      </Box>
      <Box > <PONotesBody /> </Box>
    </Box>
  );
};