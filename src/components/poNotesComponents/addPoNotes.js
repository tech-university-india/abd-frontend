import React from "react";

import { Box,IconButton,TextField,Button,Dialog,ListItem,List,Typography,MenuItem,FormControl,AppBar,Toolbar,InputLabel,Select } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import QueueSharpIcon from '@mui/icons-material/QueueSharp';

import Transition from '../utilityFunctions/overlayTransition';

function AddPoNotes() {

  const [noteType, setNoteType] = React.useState('');
  const [addNote, setAddNote] = React.useState(false);

  const addNoteOpener = () => {
    setAddNote(true);
  };

  const addNoteCloser = () => {
    setAddNote(false);
  };

  const noteTypeHandler = (event) => {
    setNoteType(event.target.value);
  };

  return(
  <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
    <IconButton aria-label="Add Notes" component="label" sx={{ color: "#2258F5" }} onClick={addNoteOpener}>
      <QueueSharpIcon fontSize='large' />
    </IconButton>
    <Dialog
      fullWidth
      open={addNote}
      onClose={addNoteCloser}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative', backgroundColor: '#2258F5' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={addNoteCloser}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Add a Note
          </Typography>
          <Button autoFocus color="inherit" onClick={addNoteCloser}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small-2"> Select Note Type </InputLabel>
              <Select
                labelId="demo-select-small-2"
                id="demo-select-small-2"
                value={noteType}
                label="note type"
                onChange={noteTypeHandler}
              >
                <MenuItem value={10}>Action Item</MenuItem>
                <MenuItem value={20}>Key Decision</MenuItem>
                <MenuItem value={30}>Agenda Item</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </ListItem>
        <ListItem>
          <Typography>Statement</Typography>
          <TextField
            sx={{ marginLeft: 3 }}
            label="Type here ..."
            fullWidth
            id="outlined-multiline-static"
            multiline
            rows={5}
            variant="outlined"
            size='10'
          />
        </ListItem>
        <ListItem>
          <Typography>Timeline</Typography>
          <TextField
            id="datetime-local"
            label="Select date, time"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ marginLeft: 4.5, width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </ListItem>
      </List>
    </Dialog>
  </Box>
)};

export default AddPoNotes;