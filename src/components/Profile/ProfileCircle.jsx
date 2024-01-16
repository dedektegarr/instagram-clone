import { Link } from "react-router-dom";

const ProfileCircle = ({ src, className }) => {
  return (
    <img
      src={src}
      alt="profile"
      className={`${className} rounded-full object-contain`}
    />
  );
};

const ProfileLink = ({ username, caption, src, className, uploaded }) => {
  return (
    <Link className="flex items-center gap-3">
      <ProfileCircle src={src} className={`${className}`} />
      <div className="flex flex-col text-sm">
        <div className="font-medium flex items-center gap-2 ">
          <span className="">{username}</span>

          {uploaded && (
            <>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span className="text-gray-400">{uploaded}</span>
            </>
          )}
        </div>
        <span className="text-slate-500 mt-[-2px]">{caption}</span>
      </div>
    </Link>
  );
};
export { ProfileCircle, ProfileLink };
