import { useState } from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import PostProfileList from "../../components/Posts/PostProfileList";
import { Outlet } from "react-router-dom";
const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("posts");

  const handleSelectTab = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <>
      <Outlet />

      <div>
        <ProfileHeader
          user={{
            username: "dedektegar",
            posts: [],
            followers: [],
            following: [],
            fullName: "Dedek",
            bio: "babi kau ya",
          }}
        />
        <ProfileTabs selected={selectedTab} onSelect={handleSelectTab} />

        <PostProfileList />
      </div>
    </>
  );
};

export default ProfilePage;
