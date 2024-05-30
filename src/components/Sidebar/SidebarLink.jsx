"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({ icon, children, href, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "font-bold" : ""
      } flex items-center gap-4 text-sm p-3 rounded-lg hover:bg-dark-2 transition duration-200`}
    >
      {icon(isActive)}
      {children}
    </Link>
  );
}
