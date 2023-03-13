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
import axios from 'axios';
import InformationModel from '../elements/InformationModel';
import { DSMBodyLayoutContext } from "../contexts/DSMBodyLayoutContext"
import SentimentMeterDialog from './SentimentMeterDialog';
import preventParentClick from '../utilityFunctions/PreventParentClick';
import { DOMAIN } from '../../config';

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

  const [currentFeeling, setCurrentFeeling] = React.useState('');

  const [feelingHappy, setFeelingHappy] = React.useState(false);
  const [feelingGood, setFeelingGood] = React.useState(false);
  const [feelingOk, setFeelingOk] = React.useState(false);
  const [feelingBad, setFeelingBad] = React.useState(false);

  const [sentimentId, setSentimentId] = React.useState(0);

  const handleSentimentHappy = async () => {
    setFeelingHappy(!feelingHappy);
    if (currentFeeling !== "HAPPY" && currentFeeling !== '') {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
    }
    if (!feelingHappy) {
      const response = await axios.post(`${DOMAIN}/api/dsm/sentiment-meter`, {
        sentiment: "HAPPY",
        author: "Anonymus"
      })
      setCurrentFeeling("HAPPY");
      setSentimentId(response.data.sentimentId);
    }
    else {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
      setSentimentId(0);
      setCurrentFeeling('');
    }
    setFeelingGood(false);
    setFeelingOk(false);
    setFeelingBad(false);
  }

  const handleSentimentGood = async () => {
    setFeelingGood(!feelingGood);
    if (currentFeeling !== "GOOD" && currentFeeling !== '') {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
    }
    if (!feelingGood) {
      const response = await axios.post(`${DOMAIN}/api/dsm/sentiment-meter`, {
        sentiment: "GOOD",
        author: "Anonymus"
      })
      setCurrentFeeling("GOOD");
      setSentimentId(response.data.sentimentId);
    }
    else {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
      setSentimentId(0);
      setCurrentFeeling('');
    }
    setFeelingHappy(false);
    setFeelingOk(false);
    setFeelingBad(false);
  }

  const handleSentimentOk = async () => {
    setFeelingOk(!feelingOk);
    if (currentFeeling !== "OK" && currentFeeling !== '') {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
    }
    if (!feelingOk) {
      const response = await axios.post(`${DOMAIN}/api/dsm/sentiment-meter`, {
        sentiment: "OK",
        author: "Anonymus"
      })
      setCurrentFeeling("OK");
      setSentimentId(response.data.sentimentId);
    }
    else {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
      setSentimentId(0);
      setCurrentFeeling('');
    }
    setFeelingHappy(false);
    setFeelingGood(false);
    setFeelingBad(false);
  }

  const handleSentimentBad = async () => {
    setFeelingBad(!feelingBad);
    if (currentFeeling !== "BAD" && currentFeeling !== '') {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
    }
    if (!feelingBad) {
      const response = await axios.post(`${DOMAIN}/api/dsm/sentiment-meter`, {
        sentiment: "BAD",
        author: "Anonymus"
      })
      setCurrentFeeling("BAD");
      setSentimentId(response.data.sentimentId);
    }
    else {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
      setSentimentId(0);
      setCurrentFeeling('');
    }
    setFeelingHappy(false);
    setFeelingGood(false);
    setFeelingOk(false);
  }

  // MAKE POST CALL TO SEND SENTIMENT
  //   if (sentiment > 0 && sentiment < 5 && feeling !== '') {
  //     const res = await axios.post(`${DOMAIN}/api/dsm/sentiment-meter`, {
  //       sentiment: feeling,
  //       author: "Anonymous"
  //     })
  //       .then((response) => {
  //         console.log(response);
  //       }, (error) => {
  //         console.log(error);
  //       })
  //   }
  //   else {
  //     const res = await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/:sentimentId`)
  //       .then((response) => {
  //         console.log(response);
  //       }
  //         , (error) => {
  //           console.log(error);
  //         }
  //       )
  //   }
  // };

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
              <IconButton onClick={handleSentimentHappy} sx={{ borderRadius: 100, padding: "0px", color: 'green' }}>
                {feelingHappy ? <SentimentVerySatisfiedTwoToneIcon id='SentimentVerySatisfiedTwoToneIcon' sx={{ fontSize: 45 }} /> : <SentimentVerySatisfiedOutlinedIcon id='SentimentVerySatisfiedOutlinedIcon' sx={{ fontSize: 45 }} />}
              </IconButton>
              <IconButton onClick={handleSentimentGood} sx={{ borderRadius: 100, padding: "0px", color: 'green' }}>
                {feelingGood ? <SentimentSatisfiedTwoToneIcon sx={{ fontSize: 45 }} id='SentimentSatisfiedTwoToneIcon' /> : <SentimentSatisfiedOutlinedIcon id='SentimentSatisfiedOutlinedIcon' sx={{ fontSize: 45 }} />}
              </IconButton>
              <IconButton onClick={handleSentimentOk} sx={{ borderRadius: 100, padding: "0px", color: 'red' }}>
                {feelingOk ? <SentimentDissatisfiedTwoToneIcon id='SentimentDissatisfiedTwoToneIcon' sx={{ fontSize: 45 }} /> : <SentimentDissatisfiedOutlinedIcon id='SentimentDissatisfiedOutlinedIcon' sx={{ fontSize: 45 }} />}
              </IconButton>
              <IconButton onClick={handleSentimentBad} sx={{ borderRadius: 100, padding: "0px", color: 'red' }}>
                {feelingBad ? <SentimentVeryDissatisfiedTwoToneIcon id='SentimentVeryDissatisfiedTwoToneIcon' sx={{ fontSize: 45 }} /> : <SentimentVeryDissatisfiedOutlinedIcon id='SentimentVeryDissatisfiedOutlinedIcon' sx={{ fontSize: 45 }} />}
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