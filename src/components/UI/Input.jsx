export default function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`w-full outline-none bg-dark-2 p-3 rounded-md text-sm ${className}`}
    />
  );
}
