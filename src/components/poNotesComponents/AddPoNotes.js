import React, { useState } from "react";
import axios from 'axios';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Box, IconButton, Dialog, ListItem, List, Typography, MenuItem,
  FormControl, AppBar, Toolbar, InputLabel, Select, ListItemButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import QueueSharpIcon from '@mui/icons-material/QueueSharp';
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import emoji from "@jukben/emoji-search";

import Transition from '../utilityFunctions/OverlayTransition';
import Timeline from "../utilityFunctions/Timeline";
import { DOMAIN } from "../../config";

const getNextDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const dateString = date.toISOString().substring(0, date.toISOString().indexOf('T'));
  return dateString;
};

function Item({ entity: { name, char } }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <Typography>{char}</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: '15px'}}>{name}</Typography>
      </ListItemButton>
    </ListItem>
  )
}

function Loading() {
  return <Box>Loading...</Box>;
}

Item.propTypes = {
  entity: Proptypes.shape({
    name: Proptypes.string.isRequired,
    char: Proptypes.string.isRequired,
  }).isRequired,
};


// TODO VALIDATION
// None state in publish other than action item
// Make buttons for publish and draft

export default function AddPoNotes({ setError, setSuccess }) {
  const [addNote, setAddNote] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [noteType, setNoteType] = useState('ACTION_ITEM');
  const [statement, setStatement] = useState('');
  const [timeline, setTimeline] = useState(getNextDate());
  const placeholder = {
    'ACTION_ITEM': 'Example: PO is to get the marketing approvals for the Payment screen text content by Monday so that we are prepared for our next sprint.',
    'KEY_DECISION': 'Example: The client suggested to use Stripe for payment integration as they already have corporate subscription.',
    'AGENDA_ITEM': 'Example: Which cloud platform are we choosing to host our app? Our Client team wants to know by this week.'
  }

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
          <Typography sx={{ fontWeight: 700, marginLeft: '20px', marginTop: '20px' }}>Smart Statement</Typography>
          <List>
            <ListItem>
              <ReactTextareaAutocomplete
                className="autocomplete-textarea"
                loadingComponent={Loading}
                style={{
                  multiline: true,
                  rows: 4,
                  fontSize: "16px",
                  lineHeight: "20px",
                  width: 305,
                  height: '150px',
                  padding: '15px 20px',
                  border: '2px solid #ccc',
                  fontFamily: 'Roboto, sans-serif',
                }}
                containerStyle={{
                  margin: "20px auto"
                }}
                minChar={0}
                trigger={{
                  ":": {
                    dataProvider: token => emoji(token)
                        .slice(0, 3)
                        .map(({ name, char }) => ({ name, char })),
                    component: Item,
                    output: (item) => item.char
                  }
                  // For adding users we can use @ as trigger
                }}
                value={statement}
                onChange={handleStatement}
                disabled={submit}
                placeholder={placeholder[noteType]}
              />

            </ListItem>
          </List>
        </Box>
        <Box>
          {noteType === 'ACTION_ITEM' && <Timeline isSubmit={submit} timeline={timeline} setTimeline={setTimeline} />}
        </Box>
      </Dialog>
    </Box>
  );
};

AddPoNotes.propTypes = {
  setError: Proptypes.func.isRequired,
  setSuccess: Proptypes.func.isRequired
};