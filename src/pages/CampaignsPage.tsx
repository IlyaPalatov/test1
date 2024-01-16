import React from 'react';
import { useParams } from 'react-router-dom';
import CampaignsTable from '../components/CampaignsTable';

const CampaignsPage: React.FC = () => {
  const { profileId } = useParams<{ profileId: string }>();

  const campaigns = [
    { campaignId: 1, profileId: 1, clicks: 100, cost: 500, date: '2022-01-10' },
    { campaignId: 2, profileId: 2, clicks: 550, cost: 250, date: '2010-02-5' },
  ];

  const filteredCampaigns = campaigns.filter(profile => profile.profileId.toString() === profileId);
  const handleRowClick = (profileId: number) => { }

  return (
    <div>
      <h2>Campaigns</h2>
      <CampaignsTable campaigns={filteredCampaigns} onRowClick={handleRowClick} />
    </div>
  );
};

export default CampaignsPage;
