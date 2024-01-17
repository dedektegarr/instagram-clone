import { useState } from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import PostProfileList from "../../components/Posts/PostProfileList";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("posts");
  const { user } = useAuthContext();

  const handleSelectTab = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <>
      <Outlet />

      <div>
        <ProfileHeader user={user} />
        <ProfileTabs selected={selectedTab} onSelect={handleSelectTab} />

        <PostProfileList />
      </div>
    </>
  );
};

export default ProfilePage;
