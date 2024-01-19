import SidebarNavItem from "./SidebarNavItem";
import { GoHome } from "react-icons/go";
import { CiSearch, CiHeart, CiLogout, CiSquarePlus } from "react-icons/ci";
import profile from "/assets/profile.jpg";
import { ProfileCircle } from "../Profile/ProfileCircle";

const SidebarNav = () => {
  return (
    <ul className="flex flex-col gap-2 mt-8 h-[90%]">
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
        to="dedektegarr"
        label="Profile"
        icon={<ProfileCircle src={profile} className="w-[30px]" />}
      />
      <SidebarNavItem
        // onClick={handleSignOut}
        className="mt-auto"
        to=""
        label="Log out"
        icon={<CiLogout className="text-3xl" />}
      />
    </ul>
  );
};

export default SidebarNav;
