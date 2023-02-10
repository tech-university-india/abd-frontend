import React, { useState } from 'react';
import {
  Box, AppBar, Container, InputLabel, MenuItem,
  FormControl, Select, Toolbar, Typography
} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import SearchBar from '../utilityFunctions/SearchBar';
import AddPoNotes from './AddPoNotes';
import ErrorSnackbar from '../utilityFunctions/ErrorSnackbar';
import SuccessSnackbar from '../utilityFunctions/SuccessSnackbar';

export default function PoNotesHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [quickFilterType, setQuickFilter] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const quickFilterHandler = (event) => {
    setQuickFilter(event.target.value);
  };
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
            <Typography
              data-testid="poNotesIdentifier"
              variant="h5"
              noWrap
              sx={{ ml: 5, fontWeight: 500, letterSpacing: '.025rem', color: 'secondary.main', textDecoration: 'none' }}
            >
              PO Notes
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ flexGrow: 0.5 }}>
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </Box>
            <FormControl sx={{ minWidth: 200 }} size="small">
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
          <Box sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}>
            <AddPoNotes setError={setError} setSuccess={setSuccess} />
          </Box>
          {error !== '' && (<Box><ErrorSnackbar message={error} setError={setError} /></Box>)}
          {success !== '' && (<Box><SuccessSnackbar message={success} setSuccess={setSuccess} /></Box>)}
        </Toolbar>
      </Container>
    </AppBar >
  );
}