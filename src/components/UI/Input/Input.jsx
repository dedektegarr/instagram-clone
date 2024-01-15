const Input = ({ id, type, label, className, ...props }) => {
  return (
    <div className="w-full my-2">
      {label && <label htmlFor={id}>{label}</label>}

      <input
        type={type || "text"}
        {...props}
        className={`${className} w-full outline-none border bg-slate-50 p-2 rounded-md text-sm focus:ring-1 placeholder:text-slate-500`}
      />
    </div>
  );
};

export { Input };
