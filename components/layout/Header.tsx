import Link from "next/link";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="fixed top-0 w-full shadow bg-background h-[72px] px-8 flex items-center justify-between z-10">
      {/* Logo */}
      <div className="bg-primary-500 w-[68px] h-[32px] bg-primary text-white rounded-full flex items-center justify-center cursor-pointer">
        <Link href="/">小红书</Link>
      </div>
      {/* Search Input */}
      <Input
        placeholder="搜索"
        className="w-[300px] h-[32px] rounded-full focus-visible:ring-0 focus-visible:ring-shadow-none focus-visible:outline-none"
      />
      {/* Right Links */}
      <div className="flex items-center gap-4">
        <Link href="/">创作中心</Link>
        <Link href="/">业务合作</Link>
      </div>
    </header>
  );
}