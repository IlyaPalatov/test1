// ProfilesPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ProfilesTable from '../components/ProfilesTable';

const ProfilesPage: React.FC = () => {
  const { accountId } = useParams<{ accountId: string }>();

  const allProfiles = [
    { profileId: 1, accountId: 1, country: 'USA', marketplace: 'Amazon' },
    { profileId: 2, accountId: 2, country: 'Canada', marketplace: 'Noon' },
  ];


  const filteredProfiles = allProfiles.filter(profile => profile.accountId.toString() === accountId);
  const handleRowClick = (profileId: number) => {

  };

  return (
    <div>
      <h2>Profiles</h2>
      <ProfilesTable profiles={filteredProfiles} onRowClick={handleRowClick} />
    </div>
  );
};

export default ProfilesPage;
