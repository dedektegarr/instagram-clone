import { NavLink } from "react-router-dom";

const SidebarNavItem = ({ to, icon, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? "bg-gray-200 font-medium" : ""
          } flex items-center gap-3 hover:bg-gray-200 py-2 px-2 rounded-md transition`
        }
      >
        {icon}
        <p className="hidden lg:block">{label}</p>
      </NavLink>
    </li>
  );
};

export default SidebarNavItem;
