"use client";

import { signOut } from "next-auth/react";
import SidebarLink from "./SidebarLink";
import SidebarNav from "./SidebarNav";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar({}) {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (error) {
      throw new Error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-w-[70px] bg-black xl:min-w-[245px]">
      <div className="p-3 min-w-[inherit] bg-inherit flex flex-col justify-between fixed top-0 left-0 h-screen border-r border-dark-2">
        <div className="py-8 px-3 hidden xl:block">
          <img src="/static/logo.png" width={110} height={50} alt="Logo" />
        </div>
        <div className="h-full">
          <SidebarNav />
        </div>
        <div className="border-t border-dark-2 pt-3">
          <div className="flex justify-between items-center gap-4">
            <SidebarLink onClick={handleSignOut} className="w-full">
              Log out
            </SidebarLink>
            {loading && (
              <Image
                src="/static/loaders/tube-spinner.svg"
                width={20}
                height={20}
                priority
                alt="Spinner"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
