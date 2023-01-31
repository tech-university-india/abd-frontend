import React from 'react';

import Box from '@mui/material/Box';

import PoNotesBody from '../poNotesComponents/poNotesBody';
import PoNotesHeader from '../poNotesComponents/poNotesHeader';

function PoNotesContainer() {
  return (
    <Box>
      <Box sx={{ m: -2, p: 4 }}> <PoNotesHeader /> </Box>
      <Box > <PoNotesBody /> </Box>
    </Box>
  );
};

export default PoNotesContainer;