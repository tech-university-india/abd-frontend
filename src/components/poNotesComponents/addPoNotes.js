import React, {useState} from "react";
import axios from 'axios';

import { Box, IconButton, TextField, Button, Dialog, ListItem, List, Typography, MenuItem, FormControl, AppBar, Toolbar, InputLabel, Select, ThemeProvider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import QueueSharpIcon from '@mui/icons-material/QueueSharp';

import Transition from '../utilityFunctions/overlayTransition';
import Timeline from "../utilityFunctions/timeline";
import theme from "../themes/globalTheme";

const getNextDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = (date.getDate()+1);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let dateString = year.toString().padStart(4, '0');
  dateString += '-';
  dateString += month.toString().padStart(2, '0');
  dateString += '-';
  dateString += day.toString().padStart(2, '0');
  dateString += 'T';
  dateString += hour.toString().padStart(2, '0');
  dateString += ':';
  dateString += minute.toString().padStart(2, '0');
  dateString += ':';
  dateString += second.toString().padStart(2, '0');
  return dateString;
};


function AddPoNotes() {

  const [ addNote, setAddNote ] = useState(false);
  const [ submit, setSubmit ] = useState(false);
  const [ noteType, setNoteType ] = useState('ACTION_ITEM');
  const [ statement, setStatement ] = useState(''); 
  const [ timeline, setTimeline ] = useState(getNextDate());

  const handleNoteOpener = () => {
    setAddNote(!addNote);
  };

  const handleSubmit = async () => {
    setSubmit(val => !val);
    try{
      const body = (noteType === 'ACTION_ITEM') ? {'type':noteType, 'note':statement, 'dueDate':timeline} : {'type':noteType, 'note': statement};
      await axios.post('http://127.0.0.1:3000/api/po-notes', body);
      // ISSUE: In API dueDate needs to take time as well and CORS is not working
    }
    catch(err){
      console.log(err);
    }
    finally{
      setSubmit(val => !val);
      setAddNote(val => !val);
    }
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
        <IconButton data-testid="AddPoNotesFormIdentifier" aria-label="Add Notes" component="label" sx={{ color: 'primary.main' }} onClick={handleNoteOpener}>
          <QueueSharpIcon fontSize='large' />
        </IconButton>
        <Dialog
          maxWidth
          open={addNote}
          onClose={handleNoteOpener}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative', backgroundColor: 'primary.main' }}>
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

              {(statement !== '') && <Button autoFocus variant="text" color="inherit" onClick={handleSubmit}> Save </Button>}
              {/* issue: when button appears the cursor is not in the text field but if I change it to typography it works */}

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
                  sx={{ width: 350 }}
                  label="Type here..."
                  id="outlined-multiline-static"
                  multiline
                  rows={5}
                  variant="outlined"
                  value={statement}
                  onChange={handleStatement}
                  disabled={submit}
                />
              </ListItem>
            </List>
          </Box>

          <Box>
            { noteType==='ACTION_ITEM' && <Timeline isSubmit ={submit} timeline={timeline} setTimeline = {setTimeline}/> }
          </Box>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default AddPoNotes;