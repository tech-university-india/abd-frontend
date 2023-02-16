import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import PONotesBody from '../poNotesComponents/PONotesBody';
import PONotesHeader from '../poNotesComponents/PONotesHeader';
import theme from '../theme/GlobalTheme';

export default function PONotesContainer() {

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box sx={{ m: -2, p: 4 }}>
          <PONotesHeader />
        </Box>
        <Box > <PONotesBody /> </Box>
      </Box>
    </ThemeProvider>

  );
};