import React, { useContext } from 'react';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import InformationModel from '../elements/InformationModel';
import { DSMBodyLayoutContext } from "../contexts/DSMBodyLayoutContext"
import SentimentMeterDialog from './SentimentMeterDialog';
import preventParentClick from '../utilityFunctions/PreventParentClick';

export default function Sentiment() {
  const { gridHeightState, dispatchGridHeight } = useContext(DSMBodyLayoutContext)
  const handleExpandSentiment = () => {
    dispatchGridHeight({ type: "SENTIMENT" })
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDialog = () => {
    setOpen(true);
    setAnchorEl(null);
  };
  const [sentiment, setSentiment] = React.useState(0);
  const handleSentiment = (event) => {
    if (sentiment > 0 && sentiment < 9) { setSentiment(0) }
    else { setSentiment(event.target.id) }

    if (event.target.id === "SentimentVerySatisfiedOutlinedIcon") {
      setSentiment(1)
    } else if (event.target.id === "SentimentSatisfiedOutlinedIcon") {
      setSentiment(2)
    } else if (event.target.id === "SentimentDissatisfiedOutlinedIcon") {
      setSentiment(3)
    } else if (event.target.id === "SentimentVeryDissatisfiedOutlinedIcon") {
      setSentiment(4)
    } else if (event.target.id === "SentimentVerySatisfiedTwoToneIcon") {
      setSentiment(5)
    } else if (event.target.id === "SentimentSatisfiedTwoToneIcon") {
      setSentiment(6)
    } else if (event.target.id === "SentimentDissatisfiedTwoToneIcon") {
      setSentiment(7)
    } else if (event.target.id === "SentimentVeryDissatisfiedTwoToneIcon") {
      setSentiment(8)
    }
  }
  return (
    <Grid item sx={{ marginBottom: "10px", paddingBottom: "10px", ...(gridHeightState.sentiment.expanded && { paddingBottom: "15px" }), display: "flex", flexDirection: "row", justifyContent: "space-between" }} height={gridHeightState.sentiment.height}>
      <Grid item xs={gridHeightState.celebration.fullExpanded ? 8 : 12}>
        <Accordion expanded={gridHeightState.sentiment.expanded} onChange={handleExpandSentiment} sx={{
          height: gridHeightState.sentiment.expanded ? "100%" : "auto",
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SentimentMeterDialog open={open} setOpen={setOpen} />
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                flexGrow: 1,
              }}
            >
              {/* All Content/Development of SentimentMeter HEADER goes here */}
              <Typography onClick={preventParentClick(() => { })} variant="dsmMain" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} width="100%" >How are you feeling today?
                <InformationModel heading="Sentiment Meter"
                  definition="This is an Anonymous entry. It is an team metric and we won’t identify you personally.
 Your voice matters for running a data driven and effective retrospective meetings. Please feel free to share your feeling."
                  accessibiltyInformation="" />
              </Typography>
            </AccordionSummary>
            <IconButton
              sx={{ borderRadius: 100 }}
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon sx={{ borderRadius: 50 }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose} >
              <MenuItem onClick={handleDialog}>See Results</MenuItem>
              <MenuItem onClick={handleClose}>Export Results</MenuItem>
            </Menu>
          </Box>
          <AccordionDetails sx={{ padding: '0px' }}>
            {/* All Content/Development of SentimentMeter BODY goes here */}
            <Stack direction="row" spacing={10} sx={{ justifyContent: "center" }}>
              <IconButton value={1} onClick={handleSentiment} sx={{ borderRadius: 100, padding: "0px", color: 'green' }}>
                {sentiment === 1 ? <SentimentVerySatisfiedTwoToneIcon id='SentimentVerySatisfiedTwoToneIcon' sx={{ fontSize: 45 }} /> : <SentimentVerySatisfiedOutlinedIcon id='SentimentVerySatisfiedOutlinedIcon' sx={{ fontSize: 45 }} />}
              </IconButton>
              <IconButton value={2} onClick={handleSentiment} sx={{ borderRadius: 100, padding: "0px", color: 'green' }}>

                {sentiment === 2 ? <SentimentSatisfiedTwoToneIcon sx={{ fontSize: 45 }} id='SentimentSatisfiedTwoToneIcon' /> : <SentimentSatisfiedOutlinedIcon id='SentimentSatisfiedOutlinedIcon' sx={{ fontSize: 45 }} />}
              </IconButton>
              <IconButton value={3} onClick={handleSentiment} sx={{ borderRadius: 100, padding: "0px", color: 'red' }}>
                {sentiment === 3 ? <SentimentDissatisfiedTwoToneIcon id='SentimentDissatisfiedTwoToneIcon' sx={{ fontSize: 45 }} /> : <SentimentDissatisfiedOutlinedIcon id='SentimentDissatisfiedOutlinedIcon' sx={{ fontSize: 45 }} />}
              </IconButton>
              <IconButton value={4} onClick={handleSentiment} sx={{ borderRadius: 100, padding: "0px", color: 'red' }}>
                {sentiment === 4 ? <SentimentVeryDissatisfiedTwoToneIcon id='SentimentVeryDissatisfiedTwoToneIcon' sx={{ fontSize: 45 }} /> : <SentimentVeryDissatisfiedOutlinedIcon id='SentimentVeryDissatisfiedOutlinedIcon' sx={{ fontSize: 45 }} />}
              </IconButton>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Grid>
      {
        gridHeightState.celebration.fullExpanded && (
          <Grid item xs={1.7}>
            <Accordion expanded={false} onChange={handleExpandSentiment} sx={{
              height: gridHeightState.sentiment.expanded ? "100%" : "none",
              padding: "6px",
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant='dsmSubMain'>Requests</Typography>
              </AccordionSummary>
            </Accordion>
          </Grid>
        )
      }
      {
        gridHeightState.celebration.fullExpanded && (
          <Grid item xs={2} height="auto">
            <Accordion expanded={false} onChange={handleExpandSentiment} sx={{
              height: gridHeightState.sentiment.expanded ? "100%" : "none",
              padding: "6px",
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant='dsmSubMain'>Announcements</Typography>
              </AccordionSummary>
            </Accordion>
          </Grid>
        )
      }
    </Grid >
  );
};

// 

// Sentiment.propTypes = {
//   gridHeightState: Proptypes.shape({
//     sentiment: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//     celebration: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       fullExpanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//     request: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//     announcement: Proptypes.shape({
//       expanded: Proptypes.bool.isRequired,
//       height: Proptypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
//   dispatchGridHeight: Proptypes.func.isRequired,
// }