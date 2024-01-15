const Button = ({ children, type, className }) => {
  return (
    <button
      type={type || "button"}
      className={`${className} py-2 px-4 rounded-md bg-blue-400 text-white text-sm transition`}
    >
      {children}
    </button>
  );
};

export default Button;
