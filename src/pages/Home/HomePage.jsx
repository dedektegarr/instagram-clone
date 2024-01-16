import { Link } from "react-router-dom";
import PostList from "../../components/Posts/PostList";
import { ProfileLink } from "../../components/Profile/ProfileCircle";
import profile from "/assets/profile.jpg";

const HomePage = () => {
  return (
    <div className="flex gap-6 xl:gap-20 justify-center">
      <div className="max-w-[500px] flex-1">
        <h1 className="text-3xl font-bold text-slate-700 mb-8">Feed</h1>
        <PostList />
      </div>

      <div className="hidden lg:block w-[300px]">
        <div className="flex items-center justify-between mb-7">
          <ProfileLink
            src={profile}
            className="h-[45px]"
            username="dedektegar"
            caption="Dedek Tegar Apriyandi"
          />
          <Link className="text-sm text-blue-500 hover:text-blue-700 font-medium">
            Log out
          </Link>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm font-medium">
              <h4 className="text-slate-500">Suggested for you</h4>
              <Link className="text-sm text-slate-900 hover:text-slate-300">
                See All
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <ProfileLink
                src={profile}
                className="h-[45px]"
                username="dedektegar"
                caption="590 follower"
              />
              <Link className="text-xs text-blue-500 hover:text-blue-700 font-medium">
                Follow
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <ProfileLink
                src={profile}
                className="h-[45px]"
                username="dedektegar"
                caption="590 follower"
              />
              <Link className="text-xs text-blue-500 hover:text-blue-700 font-medium">
                Follow
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <ProfileLink
                src={profile}
                className="h-[45px]"
                username="dedektegar"
                caption="590 follower"
              />
              <Link className="text-xs text-blue-500 hover:text-blue-700 font-medium">
                Follow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
