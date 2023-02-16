import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import PoNotesBody from '../poNotesComponents/PONotesBody';
import PoNotesHeader from '../poNotesComponents/PONotesHeader';
import theme from '../theme/GlobalTheme';

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