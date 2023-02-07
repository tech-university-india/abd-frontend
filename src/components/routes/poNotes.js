import { React,useState } from 'react';

import Box from '@mui/material/Box';

import PoNotesBody from '../poNotesComponents/poNotesBody';
import PoNotesHeader from '../poNotesComponents/poNotesHeader';

export default function PoNotesContainer() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Box>
      <Box sx={{ m: -2, p: 4 }}> <PoNotesHeader searchQuery = {searchQuery} setSearchQuery = { setSearchQuery }/> </Box>
      <Box > <PoNotesBody searchQuery = {searchQuery} /> </Box>
    </Box>
  );
};