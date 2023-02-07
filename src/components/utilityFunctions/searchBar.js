import {React,useState} from 'react';

import PropTypes from 'prop-types';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ setSearchQuery }) {

  const [tempSearch,setTempSearch] = useState('');
  const handleSearch = (e)=>{
    e.preventDefault();
    setSearchQuery(tempSearch);
  };

  const handleSearchChange = (e) =>{
    setTempSearch(e.target.value);
  };

  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        label="Search"
        variant="outlined"
        placeholder="Search..."
        onInput={handleSearchChange}
        size="small"
      />
      <IconButton type="submit" aria-label="search" sx={{ color: "#2258F5" }} onClick = {handleSearch}>
        <SearchIcon />
      </IconButton>
    </form>
  );
}

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired
};

export default SearchBar;