import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";

import HomeContainer from './Components/routes/home';
import AnnouncementContainer from './Components/routes/announcements';
import InformationRadiatorContainer from './Components/routes/informationRadiator';
import OurTeamsContainer from './Components/routes/ourTeams';
import PoNotesContainer from './Components/routes/poNotes';
import RefMaterialsContainer from './Components/routes/refMaterials';
import TimelineContainer from './Components/routes/timelines';
import Navbar from './Components/Elements/NavBar';

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