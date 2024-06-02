import FeedPosts from "@/components/Posts/FeedPosts";

export default function Home() {
  return (
    <div className="flex gap-10 items-start w-full">
      <div className="flex-1 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8">Feed</h1>

        <FeedPosts />
      </div>
      <div className="w-[320px] bg-dark-2 hidden lg:block">Side</div>
    </div>
  );
}
