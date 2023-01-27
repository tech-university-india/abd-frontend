import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomeTest from './components/routes/home';
import AnnouncementsTest from './components/routes/announcements';
import InformationRadiatorTest from './components/routes/informationRadiator';
import OurTeamsTest from './components/routes/ourTeams';
import PoNotesContainer from './components/routes/poNotes';
import RefMaterialsTest from './components/routes/refMaterials';
import TimelinesTest from './components/routes/timelines';


function App() {
  return (

    <Routes>
      <Route exact path='/' element={<HomeTest />} />
      <Route exact path='/announcements' element={<AnnouncementsTest />} />
      <Route exact path='/information-radiator' element={<InformationRadiatorTest />} />
      <Route exact path='/our-teams' element={<OurTeamsTest />} />
      <Route exact path='/po-notes' element={<PoNotesContainer />} />
      <Route exact path='/reference-material' element={<RefMaterialsTest />} />
      <Route exact path='/timeline' element={<TimelinesTest />} />
    </Routes>
  );
}

export default App;
