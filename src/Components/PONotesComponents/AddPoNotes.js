import React, { useState } from "react";
import axios from 'axios';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box, IconButton, TextField, Dialog,
  ListItem, List, Typography, MenuItem,
  FormControl, AppBar, Toolbar, InputLabel,
  Select, ThemeProvider
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import QueueSharpIcon from '@mui/icons-material/QueueSharp';

import Transition from '../utilityFunctions/overlayTransition';
import Timeline from "../utilityFunctions/timeline";
import theme from "../theme/GlobalTheme";

import { DOMAIN } from "../../config";

const getNextDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const dateString = date.toISOString().substring(0, date.toISOString().indexOf('.'));
  return dateString;
};

export default function AddPoNotes({ setError, setSuccess }) {
  const [addNote, setAddNote] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [noteType, setNoteType] = useState('ACTION_ITEM');
  const [statement, setStatement] = useState('');
  const [timeline, setTimeline] = useState(getNextDate());
  const handleNoteOpener = () => {
    setAddNote(!addNote);
  };
  const handleSubmit = async (status) => {
    setSubmit(val => !val);
    try {
      const body = (noteType === 'ACTION_ITEM') ?
        { 'type': noteType, 'note': statement, 'dueDate': timeline, 'status': status }
        : { 'type': noteType, 'note': statement, 'status': status };
      await axios.post(`${DOMAIN}/api/po-notes`, body);
      const response = 'Note added successfully';
      setSuccess(() => response);
    }
    catch (err) {
      setError(val => val + err);
    }
    finally {
      setSubmit(val => !val);
      setAddNote(val => !val);
    }
  };
  const handleDraft = () => {
    handleSubmit('DRAFT');
  };
  const handleCompletedStatus = () => {
    handleSubmit('COMPLETED');
  };
  const handleNoteType = (event) => {
    setNoteType(event.target.value);
  };
  const handleStatement = (event) => {
    setStatement(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
        <IconButton data-testid="AddPoNotesFormIdentifier" aria-label="Add Notes"
          component="label" sx={{ color: 'primary.main' }} onClick={handleNoteOpener}>
          <QueueSharpIcon fontSize='large' />
        </IconButton>
        <Dialog
          maxWidth
          open={addNote}
          onClose={handleNoteOpener}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'static', backgroundColor: 'primary.main' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleNoteOpener}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Add a Note
              </Typography>
              <Box sx={{ m: 2 }}>
                {(statement !== '') && <Link style={{ textDecoration: 'none' }} to='/po-notes'>
                  <Typography autoFocus variant="h7" color="inherit" onClick={handleCompletedStatus}
                    sx={{
                      ':hover': { color: 'secondary.main' }, color: 'secondary.light'
                    }}> Publish </Typography> </Link>}
              </Box>
              <Box>
                {(statement !== '') && <Link style={{ textDecoration: 'none' }} to='/po-notes'>
                  <Typography autoFocus variant="h7" color="inherit" onClick={handleDraft}
                    sx={{
                      ':hover': { color: 'secondary.main' }, color: 'secondary.light'
                    }}> Draft </Typography></Link>}
              </Box>
            </Toolbar>
          </AppBar>
          <Box>
            <Typography sx={{ fontWeight: 700, marginLeft: '20px', marginTop: '25px' }}>PO Note Type</Typography>
            <List>
              <ListItem>
                <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
                  <FormControl sx={{ minWidth: 350 }} size="small">
                    <InputLabel id="demo-select-small-2"> Select Note Type </InputLabel>
                    <Select
                      data-testid="noteTypeSelect"
                      labelId="demo-select-small-2"
                      id="demo-select-small-2"
                      value={noteType}
                      label="note type"
                      onChange={handleNoteType}
                      disabled={submit}
                    >
                      <MenuItem value='ACTION_ITEM'>Action Item</MenuItem>
                      <MenuItem value='KEY_DECISION'>Key Decision</MenuItem>
                      <MenuItem value='AGENDA_ITEM'>Agenda Item</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, marginLeft: '20px', marginTop: '20px' }}>Statement</Typography>
            <List>
              <ListItem>
                <TextField
                  id="outlined-multiline-static" sx={{ width: 350 }} label="Type here..."
                  multiline rows={5} variant="outlined" value={statement} onChange={handleStatement}
                  disabled={submit}
                />
              </ListItem>
            </List>
          </Box>
          <Box>
            {noteType === 'ACTION_ITEM' && <Timeline isSubmit={submit} timeline={timeline} setTimeline={setTimeline} />}
          </Box>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

AddPoNotes.propTypes = {
  setError: Proptypes.func.isRequired,
  setSuccess: Proptypes.func.isRequired
};