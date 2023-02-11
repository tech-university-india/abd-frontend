import React from 'react';
import Box from '@mui/material/Box';

import PoNotesBody from '../poNotesComponents/PONotesBody';
import PoNotesHeader from '../poNotesComponents/PONotesHeader';

export default function PoNotesContainer() {
  return (
    <Box>
      <Box sx={{ m: -2, p: 4 }}> <PoNotesHeader /> </Box>
      <Box > <PoNotesBody /> </Box>
    </Box>
  );
};