import React from 'react';
import Grid from '@mui/material/Grid';

import PONotesGridLayout from './poNotesTables/PONotesGridLayout';

export default function poNotesBody() {
  return (
    <Grid>
      <Grid backgroundColor='secondary.light'>
        <PONotesGridLayout />
      </Grid>
    </Grid >
  )
}