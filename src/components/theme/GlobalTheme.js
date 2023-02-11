import { createTheme } from '@mui/material/styles';

// Theme for the PO Notes Tables Header
const theme = createTheme({
  palette: {
    primary: {
      main: '#2258F5',
      light: '#E6EEF2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3D3D3D',
      light: '#F5F5F5',
      contrastText: '#FFFFFF',
    },
    custom: {
      draft: '#FF6E00',
      published: '#40A737',
    },
    customButton1: {
      main: '#7784EE',
      contrastText: '#FFFFFF',
    },
    customButton2: {
      main: '#FFFFFF',
      contrastText: '#044ED7',
    },
  },
  components: {
    MuiTypography: {
      variants: [{
        props: { variant: 'h6' },
        style: {
          color: 'white',
          fontFamily: 'Roboto',
          display: 'flow',
          lineHeight: '22px'
        },
      },
      ],
    },
    // theme for the PO Notes tables header
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#051C2C',
          borderradius: '0px', color: '#FFFFFF'
        },
      },
    },
    //  theme for the PO Notes tables container
    MuiTableContainer: {
      styleOverrides: {
        root:
        {
          background: '#EEF2F5',
          height: '725px',
          maxHeight: '1000px',
          Width: '500px',
          width: '100%',
          flexGrow: -5
        },
      },
    },
    jiraButton: {
      palette: {
        backgroundColor: '#E6EEF2'
      }
    }
  }
});

export default theme;