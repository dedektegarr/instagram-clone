import { CiGrid41, CiSaveDown2, CiHeart } from "react-icons/ci";

const Tab = ({ icon, label, selected, onSelect }) => {
  return (
    <div className="flex-1 md:flex-none">
      <button
        onClick={onSelect}
        className={`${
          selected && "border-t"
        } w-full justify-center outline-none -translate-x-2 md:translate-x-0 flex gap-2 items-center border-black py-4`}
      >
        {icon}
        <span className={`hidden md:block`}>{label}</span>
      </button>
    </div>
  );
};

const ProfileTabs = ({ onSelect, selected }) => {
  return (
    <div className="flex justify-center w-full mb-1">
      <div className="flex md:justify-around items-center w-full md:w-[400px]">
        <Tab
          icon={<CiGrid41 className="text-2xl" />}
          label="posts"
          selected={selected === "posts"}
          onSelect={() => onSelect("posts")}
        />
        <Tab
          icon={<CiSaveDown2 className="text-2xl" />}
          label="saved"
          selected={selected === "saved"}
          onSelect={() => onSelect("saved")}
        />
        <Tab
          icon={<CiHeart className="text-2xl" />}
          label="likes"
          selected={selected === "likes"}
          onSelect={() => onSelect("likes")}
        />
      </div>
    </div>
  );
};

export default ProfileTabs;
