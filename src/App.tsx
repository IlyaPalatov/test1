import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountsPage from './pages/AccountsPage';
import ProfilesPage from './pages/ProfilesPage';
import CampaignsPage from './pages/CampaignsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/profiles/:accountId?" element={<ProfilesPage />} />
        <Route path="/campaigns/:profileId" element={<CampaignsPage />} />
        <Route path="/" element={<AccountsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
