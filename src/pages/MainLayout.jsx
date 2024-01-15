import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-[70px] lg:w-[250px] h-screen">
        <Sidebar />
      </div>
      <main className="flex-1 py-8 px-4 h-[500vh] bg-white">
        <div className="bg-orange-400 max-w-[600px] mx-auto">Main Content</div>
      </main>
      <div className="py-8 px-4 w-[250px] xl:w-[350px] hidden md:block bg-white">
        User list
      </div>
    </div>
  );
};

export default MainLayout;
