import SidebarNav from "./SidebarNav";

export default function Sidebar({}) {
  return (
    <div className="w-[245px]">
      <div className="p-3 w-[inherit] flex flex-col justify-between fixed top-0 left-0 h-screen border-r border-dark-2">
        <div className="py-8 px-3">
          <img src="/static/logo.png" width={110} height={50} alt="Logo" />
        </div>
        <div className="h-full">
          <SidebarNav />
        </div>
        <div>buttons</div>
      </div>
    </div>
  );
}
