export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`py-2 px-4 text-sm rounded-lg disabled:opacity-70 ${className}`}
    >
      {children}
    </button>
  );
}
