import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import QueueSharpIcon from '@mui/icons-material/QueueSharp';
import PONotesDialog from './PONotesDialog';

export default function AddPONotes() {

  const [addNote, setAddNote] = useState(false);

  const handleNoteOpener = () => {
    setAddNote(!addNote);
  };

  return (
    <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
      <IconButton data-testid="AddPONotesFormIdentifier" aria-label="Add Notes"
        component="label" sx={{ color: 'primary.main' }} onClick={handleNoteOpener}>
        <QueueSharpIcon fontSize='large' />
      </IconButton>
      <PONotesDialog updateItem={false} open={addNote} handleClose={handleNoteOpener} />
    </Box >
  );
};