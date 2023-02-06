import React, { useState } from 'react';

import { Box, AppBar, Container, InputLabel, MenuItem, FormControl, Select, Toolbar, Typography } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import SearchBar from '../utilityFunctions/searchBar';
import AddPoNotes from './addPoNotes';
import ErrorSnackbar from '../utilityFunctions/errorSnackbar';
import SuccessSnackbar from '../utilityFunctions/successSnackbar';

// TODO get request filter from onSubmit search
// TODO get request filter from quick filter

function PoNotesHeader() {

  const [searchQuery, setSearchQuery] = useState('');
  const [quickFilterType, setQuickFilter] = useState('');
  const [error,setError] =  useState('');
  const [success,setSuccess] = useState('');

  const quickFilterHandler = (event) => {
    setQuickFilter(event.target.value);
  };

  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            data-testid="poNotesIdentifier"
            variant="h5"
            noWrap
            sx={{ flexGrow: 2, mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 500, letterSpacing: '.025rem', color: '#3D3D3D;', textDecoration: 'none' }}
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
                value={quickFilterType}
                label="Quick Filter"
                onChange={quickFilterHandler}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Today</MenuItem>
                <MenuItem value={2}>Yesterday</MenuItem>
                <MenuItem value={3}>Custom Date Range</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <AddPoNotes setError = {setError} setSuccess = {setSuccess}/>
          {error!=='' && (<Box><ErrorSnackbar message = {error} setError = {setError}/></Box>)}
          {success!=='' && (<Box><SuccessSnackbar message = {success} setSuccess = {setSuccess}/></Box>)}
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default PoNotesHeader;