import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, IconButton,
  Typography, Menu,
  Container, Avatar, Tooltip, MenuItem
}
  from '@mui/material';
import Logo from '../../assets/images/agileLogo.png';

const pages = ['Home', 'PO Notes', 'Our Teams', 'Timelines & Roadmaps',
  'Announcements', 'Information Radiators', 'Reference Material'];
const routes = ['/', '/po-notes', '/our-teams', '/timelines-roadmaps',
  '/announcements', '/information-radiators', '/reference-material'];
const settings = ['Profile', 'Account Settings'];

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const location = useLocation();
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img" sx={{ height: 50, flexGrow: 0.1 }}
            alt="logo" src={Logo}
          />
          <Typography
            variant="h4" color="secondary.main"
            sx={{ marginLeft: 2, flexGrow: 3, mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            My Agile Board
          </Typography>
          <Box sx={{ marginRight: 5, flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Box
                key={page}
                sx={{ flexGrow: 1 }}
              >
                <Link style={{ textDecoration: 'none' }} to={routes[index]}>
                  <Typography
                    color='secondary.main'
                    sx={{
                      my: 2, ...(location.pathname === routes[index] &&
                        { textDecoration: 'underline', textUnderlineOffset: '10px', color: 'primary.main' }),
                      ':hover': { color: 'primary.main' }, display: 'flex'
                    }}> {page}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Samim" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar" sx={{ mt: '45px' }}
              anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}
            >
              My Agile Board
            </Typography>
            <Box sx={{ marginRight: 5, flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Box
                  key={page}
                  sx={{ flexGrow: 1 }}
                >
                  <Link style={{ textDecoration: 'none' }} to={routes[index]}>
                    <Typography
                      color='secondary.main'
                      sx={{
                        ...(location.pathname === routes[index] &&
                          { textDecoration: 'underline', textUnderlineOffset: '10px', color: 'primary.main' }),
                        ':hover': { color: 'primary.main' }, display: 'flex', fontSize: '1rem'
                      }}> {page}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}