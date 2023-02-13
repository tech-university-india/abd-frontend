import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import HomeContainer from './components/routes/Home';
import AnnouncementContainer from './components/routes/Announcements';
import InformationRadiatorContainer from './components/routes/InformationRadiator';
import OurTeamsContainer from './components/routes/OurTeams';
import PoNotesContainer from './components/routes/PONotes';
import RefMaterialsContainer from './components/routes/RefMaterials';
import TimelineContainer from './components/routes/Timelines';
import Navbar from './components/elements/NavBar';

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Routes>
          <Route exact path='/' element={<HomeContainer />} />
          <Route exact path='/announcements' element={<AnnouncementContainer />} />
          <Route exact path='/information-radiators' element={<InformationRadiatorContainer />} />
          <Route exact path='/our-teams' element={<OurTeamsContainer />} />
          <Route exact path='/po-notes' element={<PoNotesContainer />} />
          <Route exact path='/reference-material' element={<RefMaterialsContainer />} />
          <Route exact path='/timelines-roadmaps' element={<TimelineContainer />} />
        </Routes>
      </Box>
    </QueryClientProvider>
  );
}