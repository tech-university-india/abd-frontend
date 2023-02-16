import React from 'react';
import { AppBar, Typography,Box,Toolbar } from '@mui/material';

export default function DSMHeader() {
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none',height:'121.5px'}}>
      <Toolbar disableGutters />
      <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
        <Typography sx={{ml: 20,fontWeight:'700',fontSize:'32px',lineHeight:'36px',color:'#051C2C'}}>Daily Standup(DSM)</Typography>
      </Box>
    </AppBar>
  );
};