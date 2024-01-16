import React from "react";

const PostCommentForm = ({ className }) => {
  return (
    <form
      action=""
      className={`${className} w-full flex items-center border-b gap-2 py-2`}
    >
      <input
        type="text"
        className="flex-1 outline-none py-2 text-sm"
        placeholder="Add a comment..."
      />
      <button className="font-medium text-blue-500 text-sm">Post</button>
    </form>
  );
};

export default PostCommentForm;
