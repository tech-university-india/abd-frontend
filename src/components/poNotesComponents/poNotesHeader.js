import React, { useState } from 'react';
import {
  Box, AppBar, Container,
  ThemeProvider, InputLabel,
  MenuItem, FormControl, Select,
  Toolbar, Typography
} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchBar from '../utilityFunctions/searchBar';
import AddPoNotes from './addPoNotes';
import theme from '../themes/globalTheme';

export default function PoNotesHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [quickFilterType, setQuickFilter] = useState('');
  const quickFilterHandler = (event) => {
    setQuickFilter(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              data-testid="poNotesIdentifier" color='secondary.main'
              variant="h5" sx={{ flexGrow: 2, mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              PO Notes
            </Typography>
            <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </Box>
            <Box sx={{ flexGrow: 0.2, display: { xs: 'none', md: 'flex' } }}>
              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small"> Quick Filters
                  <FilterAltOutlinedIcon fontSize='small' />
                </InputLabel>
                <Select
                  id="demo-select-small" labelId="demo-select-small"
                  value={quickFilterType} label="Quick Filter"
                  onChange={quickFilterHandler}
                >
                  <MenuItem value=""> <em>None</em> </MenuItem>
                  <MenuItem value={1}>Today</MenuItem>
                  <MenuItem value={2}>Yesterday</MenuItem>
                  <MenuItem value={3}>Custom Date Range</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <AddPoNotes />
          </Toolbar>
        </Container>
      </AppBar >
    </ThemeProvider >
  );
}