import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Route,Routes, useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";
import HomeContainer from './components/routes/Home';
import AnnouncementContainer from './components/routes/Announcements';
import InformationRadiatorContainer from './components/routes/InformationRadiator';
import OurTeamsContainer from './components/routes/OurTeams';
import PONotesContainer from './components/routes/PONotes';
import RefMaterialsContainer from './components/routes/RefMaterials';
import TimelineContainer from './components/routes/Timelines';
import Navbar from './components/elements/NavBar';
import Login from './Login';
import SecureRoute from './SecureRoute';

const oktaAuth = new OktaAuth({
  issuer: `https://${process.env.REACT_APP_OCTA_DOMAIN}/oauth2/default`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: `${window.location.origin}/login/callback`
});
const queryClient = new QueryClient();

export default function App() {
  const history = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} >
      <QueryClientProvider client={queryClient}>
        <Box><Navbar/></Box>
        <Box>
            <Routes>
              <Route path='/' exact element={<Login />} />
              <Route path='/home' exact element={<SecureRoute><HomeContainer/></SecureRoute>} />
              <Route path='/announcements' exact element={<SecureRoute><AnnouncementContainer /></SecureRoute>} />
              <Route path='/information-radiators' exact element={<SecureRoute><InformationRadiatorContainer /></SecureRoute>} />
              <Route path='/our-teams' exact element={<SecureRoute><OurTeamsContainer /></SecureRoute>} />
              <Route path='/po-notes' exact element={<SecureRoute><PONotesContainer /></SecureRoute>} />
              <Route path='/reference-material' exact element={<SecureRoute><RefMaterialsContainer /></SecureRoute>} />
              <Route path='/timelines-roadmaps' exact element={<SecureRoute><TimelineContainer /></SecureRoute>} />
              <Route path='/login/callback' element={<LoginCallback />} />
            </Routes>
        </Box>
      </QueryClientProvider>
    </Security>
  );
};
