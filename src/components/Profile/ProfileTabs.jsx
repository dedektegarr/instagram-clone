import { CiGrid41, CiSaveDown2, CiHeart } from "react-icons/ci";

const ProfileTabs = () => {
  return (
    <div className="flex justify-center">
      <div className="flex md:justify-around items-center w-full md:w-[400px]">
        <button className="flex-1 md:flex-none justify-center -translate-x-2 md:translate-x-0 flex gap-2 items-center border-t border-black py-4">
          <CiGrid41 className="text-2xl" />
          <span className="hidden md:block">posts</span>
        </button>
        <button className="flex-1 md:flex-none justify-center -translate-x-3 md:translate-x-0 flex gap-2 items-center py-4">
          <CiSaveDown2 className="text-2xl" />
          <span className="hidden md:block">saved</span>
        </button>
        <button className="flex-1 md:flex-none justify-center -translate-x-1 md:translate-x-1 flex gap-2 items-center py-4">
          <CiHeart className="text-2xl" />
          <span className="hidden md:block">likes</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileTabs;
