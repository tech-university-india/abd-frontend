import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#08A0F7',
      light: '#E6EEF2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3D3D3D',
      light: '#E0E0E0',
      contrastText: '#FFFFFF',
    },
  }
});

export default theme;