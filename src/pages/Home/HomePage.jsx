import PostList from "../../components/Posts/PostList";

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-slate-700 mb-8">Feed</h1>
      <PostList />
    </>
  );
};

export default HomePage;
