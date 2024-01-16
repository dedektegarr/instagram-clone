import { Link } from "react-router-dom";
import profile from "/assets/profile.jpg";
import { FaHeart, FaMessage } from "react-icons/fa6";

const PostProfileItem = ({ post }) => {
  return (
    <li>
      <Link
        to="post/asdf"
        className="cursor-pointer relative group rounded-sm overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full hidden bg-black/50 group-hover:flex justify-center items-center">
          <div className="flex gap-8">
            <div className="flex items-center gap-2 text-white font-medium">
              <FaHeart className="text-2xl" />
              <span>1,680</span>
            </div>
            <div className="flex items-center gap-2 text-white font-medium">
              <FaMessage className="text-xl" />
              <span>680</span>
            </div>
          </div>
        </div>
        <img src={profile} alt="Post" />
      </Link>
    </li>
  );
};

export default PostProfileItem;
