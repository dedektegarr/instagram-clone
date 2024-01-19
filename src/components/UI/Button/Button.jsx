import Spinners from "../Loader/Spinners/Spinners";

const Button = ({ children, type, className, isLoading, ...props }) => {
  return (
    <button
      {...props}
      type={type || "button"}
      className={`${className} py-2 px-4 rounded-md bg-blue-400 text-white text-sm transition flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {isLoading ? <Spinners /> : children}
    </button>
  );
};

export default Button;
