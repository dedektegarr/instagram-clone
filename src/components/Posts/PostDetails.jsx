import React from "react";
import Modal from "../UI/Modal/Modal";
import profile from "/assets/profile.jpg";
import { ProfileLink } from "../Profile/ProfileCircle";
import { Link } from "react-router-dom";
import { CiEdit, CiHeart } from "react-icons/ci";
import PostComments from "./PostComments";
import { FiMessageCircle } from "react-icons/fi";
import PostCommentForm from "./PostCommentForm";

const PostDetails = () => {
  return (
    <Modal>
      <div className="flex w-[850px] h-[630px]">
        <div className="w-[380px] bg-black">
          <img
            src={profile}
            alt="Post"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <header className="border-b px-4 py-3 flex items-center justify-between">
            <ProfileLink src={profile} className="h-9" username="dedektegar" />
            <Link className="p-2 hover:bg-gray-200 rounded-full">
              <CiEdit />
            </Link>
          </header>
          <div className="px-4 py-3 content-start max-h-full overflow-y-auto">
            <PostComments />
          </div>
          <footer className="mt-auto h-[200px]">
            <div className="px-4 py-3 border-y">
              <div className="flex gap-2 items-center mb-1">
                <CiHeart className="text-3xl" />
                <FiMessageCircle className="text-2xl" />
              </div>
              <p className="font-medium text-sm">1,000 likes</p>
            </div>
            <div className="px-4">
              <PostCommentForm className="border-none" />
            </div>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default PostDetails;
