import {React,useState} from 'react';
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
  Paper
} from '@mui/material';

import Sentiment from './Sentiment';
import Requests from './Requests';
import CelebrationBoard from './CelebrationBoard';
import Announcements from './Announcements';

const widths = [800, 311, 800, 311];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

export default function DSMBody() {

  const [expandEmotions, setExpandEmotions] = useState(true);
  const [expandRequests, setExpandRequests] = useState(true);
  const [expandCelebration, setExpandCelebration] = useState(true);
  const [expandAnnouncements, setExpandAnnouncements] = useState(true);

  const handleExpandEmotions = () => {
    setExpandEmotions(!expandEmotions);
  };

  const handleExpandRequests = () => {
    setExpandRequests(!expandRequests);
  };

  const handleExpandCelebration = () => {
    setExpandCelebration(!expandCelebration);
  };

  const handleExpandAnnouncements = () => {
    setExpandAnnouncements(!expandAnnouncements);
  };

  return (
    <Box sx={{ml:20}}>
      <Masonry spacing={2}>

        {/* Component For Handling Sentiment */}
        <Paper key={0} sx={{minWidth:widths[0]}}>
          <StyledAccordion sx={{ minHeight: '47px' }} expanded={expandEmotions}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={handleExpandEmotions} >
              <Typography>HOW ARE YOU FEELING TODAY?</Typography>
            </AccordionSummary>
            <AccordionDetails><Sentiment/></AccordionDetails>
          </StyledAccordion>
        </Paper>

        {/* Component For Requests */}
        <Paper key={1} sx={{minWidth:widths[1]}}>
          <StyledAccordion sx={{ minHeight: '47px' }} expanded={expandRequests}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={handleExpandRequests}>
              <Typography>REQUESTS</Typography>
            </AccordionSummary>
            <AccordionDetails><Requests/></AccordionDetails>
          </StyledAccordion>
        </Paper>

        {/* Component for Celebration board */}
        <Paper key={2} sx={{minWidth:widths[2]}}>
          <StyledAccordion sx={{ minHeight: '47px' }} expanded={expandCelebration}>
            <AccordionSummary expandIcon={(expandCelebration)?<FullscreenExitIcon/>:<FullscreenIcon/>} onClick={handleExpandCelebration}>
              <Typography>CELEBRATION BOARD</Typography>
            </AccordionSummary>
            <AccordionDetails><CelebrationBoard/></AccordionDetails>
          </StyledAccordion>
        </Paper>

        {/* Component for Anouncements */}

        <Paper key={3} sx={{minWidth:widths[3]}}>
          <StyledAccordion sx={{ minHeight: '47px' }} expanded={expandAnnouncements}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={handleExpandAnnouncements}>
              <Typography>ANNOUNCEMENTS</Typography>
            </AccordionSummary>
            <AccordionDetails><Announcements/></AccordionDetails>
          </StyledAccordion>
        </Paper>

      </Masonry>
    </Box>
  );
}