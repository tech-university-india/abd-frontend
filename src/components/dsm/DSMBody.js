import { React, useState } from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Masonry from '@mui/lab/Masonry';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Grid,
  Paper
} from '@mui/material';

import Sentiment from './Sentiment';
import Requests from './Requests';
import CelebrationBoard from './CelebrationBoard';
import Announcements from './Announcements';

const widths = ['57.6%', '22.4%', '57.6%', '22.4%'];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

export default function DSMBody() {
  const [expandSentiment, setExpandSentiment] = useState(true);
  const [expandCelebration, setExpandCelebration] = useState(true);
  const [expandRequests, setExpandRequests] = useState(true);
  const [expandAnnouncements, setExpandAnnouncements] = useState(true);

  const handleExpandSentiment = () => {
    setExpandSentiment(!expandSentiment);
  };

  const handleExpandCelebration = () => {
    setExpandCelebration(!expandCelebration);
  };

  const handleExpandRequests = () => {
    setExpandRequests(!expandRequests);
  };

  const handleExpandAnnouncements = () => {
    setExpandAnnouncements(!expandAnnouncements);
  };

  return (
    <Grid backgroundColor='secondary.light'>
      <Box sx={{ padding: '50px 50px 50px 50px', margin: '0px 50px 0px 50px' }}>
        <Masonry columns={2}
          spacing={2}
          sx={{ alignContent: 'center' }}>

          {/* Component For Handling Sentiment */}
          <Paper key={0} sx={{ minWidth: widths[0] }}>
            <StyledAccordion expanded={expandSentiment}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={handleExpandSentiment}>
                <Typography>HOW ARE YOU FEELING TODAY?</Typography>
              </AccordionSummary>
              <AccordionDetails><Sentiment /></AccordionDetails>
            </StyledAccordion>
          </Paper>

          {/* Component For Requests */}
          <Paper key={1} sx={{ minWidth: widths[1] }}>
            <StyledAccordion expanded={expandRequests}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={handleExpandRequests}>
                <Typography>REQUESTS</Typography>
              </AccordionSummary>
              <AccordionDetails><Requests /></AccordionDetails>
            </StyledAccordion>
          </Paper>

          {/* Component for Celebration board */}
          <Paper key={2} sx={{ minWidth: widths[2] }}>
            <StyledAccordion expanded={expandCelebration}>
              <AccordionSummary expandIcon={(expandCelebration) ? <FullscreenExitIcon /> : <FullscreenIcon />} onClick={handleExpandCelebration}>
                <Typography>CELEBRATION BOARD</Typography>
              </AccordionSummary>
              <AccordionDetails><CelebrationBoard /></AccordionDetails>
            </StyledAccordion>
          </Paper>

          {/* Component for Anouncements */}
          <Paper key={3} sx={{ minWidth: widths[3] }}>
            <StyledAccordion expanded={expandAnnouncements}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={handleExpandAnnouncements}>
                <Typography>ANNOUNCEMENTS</Typography>
              </AccordionSummary>
              <AccordionDetails><Announcements /></AccordionDetails>
            </StyledAccordion>
          </Paper>

        </Masonry>
      </Box >
    </Grid>
  );
}