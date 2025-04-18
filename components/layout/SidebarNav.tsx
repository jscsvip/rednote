"use client"; // Mark as Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, UserIcon } from "lucide-react"; // Assuming PlusIcon is for the Button
import { Button } from "@/components/ui/button";

export function SidebarNav() {
  const pathname = usePathname(); // Get current pathname

  return (
    <div className="flex flex-col items-start justify-center gap-4 mt-4 px-4">
      <Link
        href="/"
        className={`flex items-center gap-2 rounded-full w-full p-4 ${
          pathname === "/"
            ? "bg-muted text-primary-500 font-semibold" // Active style
            : "hover:bg-muted text-primary-500" // Default style
        }`}
      >
        <HomeIcon /> 首页
      </Link>
      <Link
        href="/publish"
        className={`flex items-center gap-2 rounded-full w-full p-4 ${
          pathname === "/publish"
            ? "bg-muted text-primary-500 font-semibold" // Active style
            : "hover:bg-muted text-primary-500" // Default style
        }`}
      >
        <UserIcon /> 发布页面
      </Link>
      <Link
        href="/music"
        className={`flex items-center gap-2 rounded-full w-full p-4 ${
          pathname === "/music"
            ? "bg-muted text-primary-500 font-semibold" // Active style
            : "hover:bg-muted text-primary-500" // Default style
        }`}
      >
        <UserIcon /> 音乐
      </Link>
      {/* Consider adding PlusIcon here if needed */}
      <Button className="flex items-center justify-center gap-2 hover:bg-primary/80 rounded-full w-full h-[48px]">
        发帖
      </Button>
    </div>
  );
}