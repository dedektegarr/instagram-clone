import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[60px] md:w-[250px] h-screen">
          <Sidebar />
        </div>

        <main className="flex-1 py-8 px-4 bg-white">
          <div className="max-w-[935px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
