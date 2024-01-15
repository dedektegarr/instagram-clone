import logo from "/assets/logo.png";
import { Link } from "react-router-dom";
import SidebarNav from "./SidebarNav";
import { FaInstagram } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="w-[70px] flex flex-col items-center lg:block fixed border-r top-0 left-0 lg:w-[250px] h-full py-8 px-3 bg-white">
      <Link to="" className="inline-block px-2">
        <FaInstagram className="lg:hidden text-3xl" />
        <img src={logo} alt="logo" className="w-28 hidden lg:block" />
      </Link>
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
