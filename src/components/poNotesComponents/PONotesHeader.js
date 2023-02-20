import React, { useState } from 'react';
import { Box, AppBar, Container, InputLabel, FormControl, Toolbar, Typography, Popover, Select } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchBar from '../utilityFunctions/SearchBar';
import AddPONotes from './AddPONotes';
import QuickFilterPopover from './poNotesTables/poNotesTablesHeader/QuickFilterPopover';

export default function PONotesHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handQuickFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl" padding='0' margin='0'>
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
            <FormControl id="demo-select-small" sx={{ minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small">
                <Box display='flex' align-items='center'>
                  Quick Filters
                  &nbsp;
                  <FilterAltOutlinedIcon fontSize='small' />
                </Box>
              </InputLabel>
              <Select
                labelId="quick-filter-popover"
                aria-describedby={id}
                label="Quick Filters Icon"
                onClick={handQuickFilterClick}
                disabled
              />
              <Popover
                id='quick-filter-popover'
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <QuickFilterPopover onChange={(filters) => {
                  // TODO: update the filters as per requirement and integrate with backend
                  console.log(filters);
                }} />
              </Popover>
            </FormControl>
          </Box>
          <Box sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}>
            <AddPONotes updateItem={false} data={{ status: "DRAT", noteType: "ACTION_ITEM", note: "hello", dueDate: "kk" }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}