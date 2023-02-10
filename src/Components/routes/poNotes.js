import React from 'react';
import { Box, ThemeProvider } from '@mui/material';

import PoNotesBody from '../PONotesComponents/PONotesBody';
import PoNotesHeader from '../PONotesComponents/PONotesHeader';
import theme from '../Theme/GlobalTheme';

export default function PoNotesContainer() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box sx={{ m: -2, p: 4 }}> <PoNotesHeader /> </Box>
        <Box > <PoNotesBody /> </Box>
      </Box>
    </ThemeProvider>
  );
};