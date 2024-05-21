"use client";

import { useState } from "react";

export default function Input({ className, ...props }) {
  const [hide, setHide] = useState(true);
  const [inputValue, setInputValue] = useState("");

  if (props.type === "password") {
    return (
      <div className="relative">
        <input
          {...props}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type={hide ? "password" : "text"}
          className={`w-full outline-none bg-dark-2 p-3 rounded-md text-sm ${className}`}
        />
        {inputValue.trim() ? (
          <button
            onClick={() => setHide(!hide)}
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-3 text-xs text-blue-500"
          >
            {hide ? "Show" : "Hide"}
          </button>
        ) : undefined}
      </div>
    );
  }

  return (
    <input
      {...props}
      className={`w-full outline-none bg-dark-2 p-3 rounded-md text-sm ${className}`}
    />
  );
}
