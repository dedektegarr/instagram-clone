import SidebarNavItem from "./SidebarNavItem";
import { GoHome } from "react-icons/go";
import { CiSearch, CiHeart, CiSquarePlus } from "react-icons/ci";
import logo from "/assets/logo.png";
import ProfileCircle from "../UI/ProfileCircle/ProfileCircle";

const SidebarNav = () => {
  return (
    <ul className="flex flex-col gap-2 mt-8">
      <SidebarNavItem
        to=""
        label="Home"
        icon={<GoHome className="text-3xl" />}
      />
      <SidebarNavItem
        to="search"
        label="Search"
        icon={<CiSearch className="text-3xl" />}
      />
      <SidebarNavItem
        to="notification"
        label="Notification"
        icon={<CiHeart className="text-3xl" />}
      />
      <SidebarNavItem
        to="create"
        label="Create"
        icon={<CiSquarePlus className="text-3xl" />}
      />
      <SidebarNavItem
        to="profile"
        label="Profile"
        icon={
          <ProfileCircle
            src={logo}
            className="h-[30px] w-[30px] object-contain"
          />
        }
      />
    </ul>
  );
};

export default SidebarNav;
