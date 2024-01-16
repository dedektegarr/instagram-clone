import React from "react";
import { ProfileCircle } from "../Profile/ProfileCircle";
import profile from "/assets/profile.jpg";

const PostCommentItem = () => {
  return (
    <li>
      <div className="flex items-start gap-3">
        <ProfileCircle src={profile} className="h-9" />
        <div className="text-sm">
          <p className="leading-relaxed tracking-wide">
            <span className="font-medium mr-2">dedektegar</span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima.
          </p>
          <div className="mt-1">
            <span className=" text-slate-400">12h ago</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostCommentItem;
