import React, { useContext } from 'react';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Box, Menu, MenuItem, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/system';
import axios from 'axios';
import InformationModel from '../elements/InformationModel';
import { DSMBodyLayoutContext } from "../contexts/DSMBodyLayoutContext"
import SentimentMeterDialog from './SentimentMeterDialog';
import preventParentClick from '../utilityFunctions/PreventParentClick';
import { SentimentMeterInfo } from '../constants/SentimentMeter';
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
  const [sentimentId, setSentimentId] = React.useState(0);

  const [feelingHappy, setFeelingHappy] = React.useState(false);
  const [feelingGood, setFeelingGood] = React.useState(false);
  const [feelingOk, setFeelingOk] = React.useState(false);
  const [feelingBad, setFeelingBad] = React.useState(false);

  const anonymusAuthor = "Anonymus";
  const feeling = {
    feeling_1: "HAPPY",
    feeling_2: "GOOD",
    feeling_3: "OK",
    feeling_4: "BAD"
  }

  const handleSentimentHappy = async () => {
    setFeelingHappy(!feelingHappy);
    if (currentFeeling !== feeling.feeling_1 && currentFeeling !== '') {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
    }
    if (!feelingHappy) {
      const response = await axios.post(`${DOMAIN}/api/dsm/sentiment-meter`, {
        sentiment: feeling.feeling_1,
        author: anonymusAuthor
      })
      setCurrentFeeling(feeling.feeling_1);
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
    if (currentFeeling !== feeling.feeling_2 && currentFeeling !== '') {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
    }
    if (!feelingGood) {
      const response = await axios.post(`${DOMAIN}/api/dsm/sentiment-meter`, {
        sentiment: feeling.feeling_2,
        author: anonymusAuthor
      })
      setCurrentFeeling(feeling.feeling_2);
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
    if (currentFeeling !== feeling.feeling_3 && currentFeeling !== '') {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
    }
    if (!feelingOk) {
      const response = await axios.post(`${DOMAIN}/api/dsm/sentiment-meter`, {
        sentiment: feeling.feeling_3,
        author: anonymusAuthor
      })
      setCurrentFeeling(feeling.feeling_3);
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
    if (currentFeeling !== feeling.feeling_4 && currentFeeling !== '') {
      await axios.delete(`${DOMAIN}/api/dsm/sentiment-meter/${sentimentId}`)
    }
    if (!feelingBad) {
      const response = await axios.post(`${DOMAIN}/api/dsm/sentiment-meter`, {
        sentiment: feeling.feeling_4,
        author: anonymusAuthor
      })
      setCurrentFeeling(feeling.feeling_4);
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
              <Typography onClick={preventParentClick(() => { })} variant="dsmMain" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} width="100%" >How are you feeling today?
                <InformationModel heading={SentimentMeterInfo.heading}
                  definition={SentimentMeterInfo.definition}
                  accessibiltyInformation={SentimentMeterInfo.accessibilityInformation} />
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
            <Stack direction="row" spacing={10} sx={{ justifyContent: "center" }}>
              <Box>
                <IconButton onClick={handleSentimentHappy} sx={{ borderRadius: 100, padding: "0px", color: 'emoji.happy' }}>
                  {feelingHappy ? <SentimentVerySatisfiedTwoToneIcon sx={{ fontSize: 40 }} /> : <SentimentVerySatisfiedOutlinedIcon sx={{ fontSize: 40 }} />}
                </IconButton>
              </Box>
              <IconButton onClick={handleSentimentGood} sx={{ borderRadius: 100, padding: "0px", color: 'emoji.good' }}>
                {feelingGood ? <SentimentSatisfiedTwoToneIcon sx={{ fontSize: 40 }} /> : <SentimentSatisfiedOutlinedIcon sx={{ fontSize: 40 }} />}
              </IconButton>
              <IconButton onClick={handleSentimentOk} sx={{ borderRadius: 100, padding: "0px", color: 'emoji.ok' }}>
                {feelingOk ? <SentimentDissatisfiedTwoToneIcon sx={{ fontSize: 40 }} /> : <SentimentDissatisfiedOutlinedIcon sx={{ fontSize: 40 }} />}
              </IconButton>
              <IconButton onClick={handleSentimentBad} sx={{ borderRadius: 100, padding: "0px", color: 'emoji.bad' }}>
                {feelingBad ? <SentimentVeryDissatisfiedTwoToneIcon sx={{ fontSize: 40 }} /> : <SentimentVeryDissatisfiedOutlinedIcon sx={{ fontSize: 40 }} />}
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