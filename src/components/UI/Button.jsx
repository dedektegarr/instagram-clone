"use client";

import Image from "next/image";
import { useFormStatus } from "react-dom";

export default function Button({ children, className, ...props }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      {...props}
      className={`flex items-center gap-1 justify-center py-2 px-4 text-sm rounded-lg disabled:opacity-70 ${className}`}
    >
      {pending && (
        <Image
          src="/static/loaders/tube-spinner.svg"
          width={20}
          height={20}
          priority
          alt="Spinner"
        />
      )}
      {children}
    </button>
  );
}
