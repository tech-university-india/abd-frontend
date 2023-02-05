/* eslint-disable import/no-import-module-exports */

import { createTheme } from '@mui/material/styles';

// Theme for the PO Notes Tables Header
const PONotesTableTheme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
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
    }

});


export default PONotesTableTheme;