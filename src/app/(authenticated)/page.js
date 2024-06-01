export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">Feed</h1>
      </div>
      <div className="w-[320px] bg-dark-2 hidden lg:block">Side</div>
    </div>
  );
}
