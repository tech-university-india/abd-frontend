import * as React from 'react';
import { Grid, ThemeProvider } from '@mui/material';

import PONotesGridLayout from "./poNotesTables/poNotesGridLayout";
import theme from '../themes/globalTheme';

export default function poNotesBody() {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Grid sx={{
          minWidth: "100%",
          height: "100vh", backgroundColor: 'primary.light'
        }}><PONotesGridLayout /></Grid>
      </Grid>
    </ThemeProvider>
  )
}