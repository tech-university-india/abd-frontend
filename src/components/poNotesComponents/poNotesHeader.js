import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Slide from '@mui/material/Slide';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import QueueSharpIcon from '@mui/icons-material/QueueSharp';


// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


function SearchBar ({setSearchQuery}){
  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Search"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search" sx={{ color: "#2258F5" }}>
        <SearchIcon />
      </IconButton>
    </form>
  );
}

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired
};


const Transition = React.forwardRef(
  (props, ref) =><Slide direction="up" ref={ref} {...props}/>
);

function PoNotesHeader(){

  const [searchQuery, setSearchQuery] = useState("");
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <AppBar position="static" style={{
      background: 'transparent', boxShadow: 'none',
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 500,
              letterSpacing: '.025rem',
              color: '#3D3D3D;',
              textDecoration: 'none',
            }}
          >
            PO Notes
          </Typography>
          <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Box>
          <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small"> Quick Filters <FilterAltOutlinedIcon fontSize='small' /></InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value1}
                label="Quick Filter"
                onChange={handleChange1}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Today</MenuItem>
                <MenuItem value={20}>Yesterday</MenuItem>
                <MenuItem value={30}>Custom Date Range</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
            <IconButton aria-label="Add Notes" component="label" sx={{ color: "#2258F5" }} onClick={handleClickOpen}>
              <QueueSharpIcon fontSize='large' />
            </IconButton>
            <Dialog
              fullWidth
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <AppBar sx={{ position: 'relative', backgroundColor: '#2258F5' }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Add a Note
                  </Typography>
                  <Button autoFocus color="inherit" onClick={handleClose}>
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
                        value={value2}
                        label="note type"
                        onChange={handleChange2}
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
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default PoNotesHeader;