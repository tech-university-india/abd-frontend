import * as React from 'react';
import Grid from '@mui/material/Grid';
import PONotesGridLayout from './poNotesTables/poNotesGridLayout';

export default function poNotesBody() {
  return (
    <Grid>
      <Grid sx={{
        minWidth: "100%",
        height: "100vh", backgroundColor: '#F5F5F5'
      }}><PONotesGridLayout /></Grid>
    </Grid>
  )
}