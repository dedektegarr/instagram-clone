const Input = ({ id, type, label, className, error, ...props }) => {
  return (
    <div className="w-full my-2">
      {label && <label htmlFor={id}>{label}</label>}

      <input
        type={type || "text"}
        {...props}
        className={`${className} ${
          error ? "border border-red-400" : ""
        } w-full outline-none border bg-slate-50 p-2 rounded-md text-sm focus:ring-1 placeholder:text-slate-500`}
      />

      {error && (
        <span className="block text-xs -translate-y-[.5px] text-red-400">
          {error}
        </span>
      )}
    </div>
  );
};

export { Input };
