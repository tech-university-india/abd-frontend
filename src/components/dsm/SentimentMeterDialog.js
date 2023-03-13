import { React, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button, Typography } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
// eslint-disable-next-line import/no-unresolved
import { Chart, PieSeries } from '@devexpress/dx-react-chart-material-ui'

const data = [
    { argument: 'Satisfied', value: 10 },
    { argument: 'VerySatisfied', value: 40 },
    { argument: 'Dissatisfied', value: 10 },
    { argument: 'VeryDissatisfied', value: 20 },
];


export default function SentimentMeterDialog({ open, setOpen }) {
    const handleClose = () => { setOpen(false); };
    const [quickFilterType, setQuickFilter] = useState('');
    const quickFilterHandler = (event) => {
        setQuickFilter(event.target.value);
    };
    return (
        <div >
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" sx={{ "box-shadow": "0px 3px 6px rgba(0, 0, 0, 0.1), 0px 24px 48px rgba(0, 0, 0, 0.2)", "border-radius": "2px" }}>
                <DialogContent>
                    <Box sx={{ display: 'flex' }}>
                        <Typography flexGrow={1} variant="h6" color='black'>Sentiment Meter</Typography>
                        <FormControl sx={{ minWidth: 200 }} size="small">
                            <InputLabel id="demo-select-small">
                                <Box display='flex' align-items='center'>
                                    Quick Filters
                                    &nbsp;
                                    <FilterAltOutlinedIcon fontSize='small' />
                                </Box>
                            </InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={quickFilterType}
                                label="Quick Filters Icn"
                                onChange={quickFilterHandler}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Today</MenuItem>
                                <MenuItem value={2}>Yesterday</MenuItem>
                                <MenuItem value={3}>Custom Date Range</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Paper>
                        <Chart
                            data={data}
                        >
                            <PieSeries valueField="value" argumentField="argument" />
                        </Chart>
                    </Paper>
                    <DialogContentText id="alert-dialog-description">This is an Anonymous entry. It is a team metric and we won’t identify you personally. Your voice matters for running a data-driven and effective retrospective meetings. Please feel free to share your feeling.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="button" color='primary.main' autoFocus>
                        <Typography variant="button" color='primary.main'>Export to csv</Typography>
                    </Button>
                    <Button onClick={handleClose} variant="button" color='primary.main' autoFocus>
                        <Typography variant="button" color='primary.main'>OK</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
SentimentMeterDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};
