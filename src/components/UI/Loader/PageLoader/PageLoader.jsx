import logo from "/assets/ig-logo.png";

const PageLoader = () => {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-50 bg-white flex justify-center items-center">
      <img src={logo} alt="logo" className="h-[100px]" />
    </div>
  );
};

export default PageLoader;
