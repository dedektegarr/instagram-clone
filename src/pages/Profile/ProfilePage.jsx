import { useState } from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import PostProfileList from "../../components/Posts/PostProfileList";

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("posts");

  const handleSelectTab = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <div>
      <ProfileHeader />
      <ProfileTabs selected={selectedTab} onSelect={handleSelectTab} />

      <PostProfileList />
    </div>
  );
};

export default ProfilePage;
