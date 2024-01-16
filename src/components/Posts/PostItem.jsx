import { Link } from "react-router-dom";
import { ProfileLink } from "../Profile/ProfileCircle";
import profile from "/assets/profile.jpg";
import { CiHeart, CiSaveDown2 } from "react-icons/ci";
import PostCommentForm from "./PostCommentForm";

const PostItem = () => {
  return (
    <li>
      <article>
        <header className="flex justify-between items-center mb-3">
          <ProfileLink
            src={profile}
            username="dedektgarr"
            className="h-[38px]"
            caption="Indonesia"
            uploaded="Now"
          />

          <Link className="p-2 font-medium text-sm text-blue-500 hover:text-blue-600 rounded-full">
            Follow
          </Link>
        </header>

        <div>
          <img
            className="rounded-md min-h-[400px] max-h-[600px] object-cover"
            src="https://imgcdnblog.carbay.com/wp-content/uploads/2023/01/13143356/Nissan-GT-R-2024-1024-06.jpg"
            alt="Post Image"
          />

          <div className="flex items-center justify-between my-2">
            <button className="text-3xl hover:text-gray-600">
              <CiHeart />
            </button>
            <button className="text-3xl hover:text-gray-600">
              <CiSaveDown2 />
            </button>
          </div>
        </div>

        <footer className="text-sm">
          <p className="font-medium">1 likes</p>
          <p>
            <span className="font-medium mr-1">dedektegar</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ab
            ducimus neque. Suscipit totam nisi cupiditate, neque blanditiis
            eaque esse...
          </p>

          <PostCommentForm />
        </footer>
      </article>
    </li>
  );
};

export default PostItem;
