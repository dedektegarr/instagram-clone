"use client";

import SidebarLink from "./SidebarLink";

const links = [
  {
    path: "/",
    label: "Home",
    icon: (isActive) => (
      <svg
        aria-label="Home"
        className="x1lliihq x1n2onr6 x5n08af"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Home</title>
        <path
          d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
          fill={isActive ? "currentColor" : "none"}
          stroke="currentColor"
          strokeLinejoin="currentColor"
          strokeWidth="2"
        ></path>
      </svg>
    ),
  },
  {
    path: "/search",
    label: "Search",
    icon: (isActive) => (
      <svg
        aria-label="Search"
        className="x1lliihq x1n2onr6 x5n08af"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Search</title>
        <path
          d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={isActive ? "3" : "2"}
        ></path>
        <line
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={isActive ? "3" : "2"}
          x1="16.511"
          x2="22"
          y1="16.511"
          y2="22"
        ></line>
      </svg>
    ),
  },
  {
    path: "/explore",
    label: "Explore",
    icon: (isActive) => (
      <svg
        aria-label="Explore"
        className="x1lliihq x1n2onr6 x5n08af"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Explore</title>
        <circle
          cx="12.001"
          cy="12.005"
          fill={isActive ? "currentColor" : "none"}
          r="10.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></circle>
        <polygon
          fill={isActive ? "currentColor" : "none"}
          points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
          stroke={isActive ? "black" : "currentColor"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polygon>
        <polygon
          fill={isActive ? "black" : "currentColor"}
          fillRule="evenodd"
          points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
        ></polygon>
      </svg>
    ),
  },
  {
    path: "/messages",
    label: "Messages",
    icon: (isActive) => (
      <svg
        aria-label="Messenger"
        className="x1lliihq x1n2onr6 x5n08af"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Messenger</title>
        <path
          d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
          fill={isActive ? "currentColor" : "none"}
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="1.739"
        ></path>
        <path
          fill={isActive ? "black" : "currentColor"}
          d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
          fillRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    path: "/search",
    label: "Search",
    icon: (isActive) => (
      <svg
        aria-label="Search"
        className="x1lliihq x1n2onr6 x5n08af"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Search</title>
        <path
          d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={isActive ? "3" : "2"}
        ></path>
        <line
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={isActive ? "3" : "2"}
          x1="16.511"
          x2="22"
          y1="16.511"
          y2="22"
        ></line>
      </svg>
    ),
  },
];

export default function SidebarNav() {
  return (
    <nav className="flex flex-col w-full gap-4">
      {links.map((link, i) => (
        <SidebarLink key={i} href={link.path} icon={link.icon}>
          {link.label}
        </SidebarLink>
      ))}
    </nav>
  );
}
