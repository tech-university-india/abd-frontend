import React from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ setSearchQuery }) {
  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => { setSearchQuery(e.target.value); }}
        label="Search"
        variant="outlined" placeholder="Search..." size="small"
        InputProps={{
          endAdornment: (
            <IconButton type="submit" sx={{ color: "primary.main" }}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </form>
  );
}
SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired
};