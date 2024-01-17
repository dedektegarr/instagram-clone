import Button from "../UI/Button/Button";
import { ProfileCircle } from "./ProfileCircle";
import profile from "/assets/profile.jpg";

const ProfileHeader = ({ user }) => {
  const { username, posts, followers, following, fullName, bio } = user;

  return (
    <>
      <header className="md:border-b md:pb-14">
        <div className="flex items-center gap-5 md:gap-10 w-full">
          <ProfileCircle src={profile} className="h-20 md:h-36" />
          <div className="flex flex-col md:gap-3">
            <div className="flex items-start md:items-center flex-col md:flex-row gap-2 md:gap-4">
              <p className="font-medium text-xl md:text-base">{username}</p>
              <Button className="text-xs hover:bg-blue-500">
                Edit Profile
              </Button>
            </div>
            <div className="items-center gap-4 hidden md:flex">
              <p className="text-center">
                <span className="font-medium">{posts.length}</span> Posts
              </p>
              <p className="text-center">
                <span className="font-medium">{followers.length}</span>{" "}
                Followers
              </p>
              <p className="text-center">
                <span className="font-medium">{following.length}</span>{" "}
                Following
              </p>
            </div>
            <div className="hidden md:block">
              <p className="font-medium text-sm mb-2">{fullName}</p>
              <p className="text-sm text-slate-600">{bio}</p>
            </div>
          </div>
        </div>

        <div className="block mt-5 md:hidden">
          <p className="font-medium text-sm mb-2">{fullName}</p>
          <p className="text-sm text-slate-600">{bio}</p>
        </div>

        <div className="flex justify-around items-center py-3 text-sm border-y mt-6 md:hidden">
          <div className="text-center">
            <p className="font-medium">{posts.length}</p>
            <span className="text-slate-500">posts</span>
          </div>
          <div className="text-center">
            <p className="font-medium">{followers.length}</p>
            <span className="text-slate-500">followers</span>
          </div>
          <div className="text-center">
            <p className="font-medium">{following.length}</p>
            <span className="text-slate-500">following</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
