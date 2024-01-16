import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link, Outlet } from "react-router-dom";
import { ProfileLink } from "../components/Profile/ProfileCircle";
import profile from "/assets/profile.jpg";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-[60px] md:w-[250px] h-screen">
        <Sidebar />
      </div>
      <main className="flex-1 py-8 px-4 h-[500vh] bg-white">
        <div className="max-w-[500px] mx-auto">
          <Outlet />
        </div>
      </main>
      <div className="py-8 pl-4 pr-10 w-[365px] hidden lg:block bg-white">
        <div className="flex items-center justify-between mb-6">
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
          <div className="flex flex-col gap-3">
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

export default MainLayout;
