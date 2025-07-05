"use client";
import { useState } from "react";
import React from "react";
import Logo from "@/public/images/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarsIcon, SearchIcon } from "@/public/svg/svg";
import { Switch } from "@/components/ui/switch";
import { ModeToggle } from "./DarkModeToggle";
import { Search } from "lucide-react";

function Header() {
    type NavLink = {
        name: string
        href: string
    }
    const [isOpen, setIsOpen] = useState(false);
    const navLinks: NavLink[] = [
        { name: 'Explore', href: '/explore' },
        { name: 'About', href: '/about' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Docs', href: '/docs' },
        { name: 'News', href: '/newsroom' },
    ]
    const pathname = usePathname()
    return (
        <div className='pt-5 px-5'>
            <div className='pl-6 pr-4 py-4 w-full max-w-[1200px] m-auto dark:border dark:border-[#282828] bg-white dark:bg-[#0D0D0D] rounded-[100px] flex items-center justify-between'>
                <div className='flex items-center gap-15'>
                    <a href="/" className='cursor-pointer dark:drop-shadow-[0_0_2em_rgba(255,255,255,0.85)]'><img src={Logo.src} alt="Zicket Logo" className='h-5 w-auto' /></a>
                    <div className='hidden md:flex gap-3 text-sm'>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href
=======
  type NavLink = {
    name: string;
    href: string;
  };
  const [isOpen, setIsOpen] = useState(false);
  const navLinks: NavLink[] = [
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Docs", href: "/docs" },
    { name: "News", href: "/news" },
  ];
  const pathname = usePathname();
  return (
    <div className="pt-5 px-5">
      <div className="pl-6 pr-4 py-4 w-full max-w-[1200px] m-auto border border-[#E4E4E4] dark:border dark:border-[#282828] bg-white/80 dark:bg-[#0D0D0D] rounded-[100px] backdrop-blur-[8px] flex items-center justify-between">
        <div className="flex items-center gap-15">
          <a
            href="/"
            className="cursor-pointer dark:drop-shadow-[0_0_2em_rgba(255,255,255,0.85)]"
          >
            <img src={Logo.src} alt="Zicket Logo" className="h-5 w-auto" />
          </a>
          <div className="hidden md:flex gap-3 text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 text-sm font-medium ${
                    pathname === link.href
                      ? "text-[#6917AF] dark:text-[#D7B5F5]"
                      : "text-[#172233] dark:text-white hover:text-[#6917AF] dark:hover:text-[#D7B5F5]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <button className="w-11 h-11 flex items-center justify-center text-[#2C0A4A] dark:text-[#D7B5F5] border-2 border-[#2C0A4A] dark:border-[#D7B5F5] rounded-full">
            <Search />
          </button>
          <button className="cursor-pointer px-6 py-3 border-2 border-[#751AC6] text-[#751AC6] rounded-full font-bold transition-all duration-300 dark:hover:border-gray-50 dark:hover:text-gray-50">
            Connect Wallet
          </button>
          <button className="cursor-pointer px-6 py-3 border bg-[#751AC6] text-white dark:text-[#0D0D0D] rounded-full font-bold transition-all duration-300 dark:hover:drop-shadow-[0_0_2em_rgba(255,255,255,0.3)] dark:hover:text-gray-50">
            Host Event
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden border-2 border-[#751AC6] rounded-lg p-3"
        >
          <BarsIcon />
        </button>
        {isOpen && (
          <div className="absolute lg:hidden right-20 top-20 w-fit p-5 flex flex-col gap-5  bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <div className="md:hidden flex flex-col gap-3 text-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2 ${
                      pathname === link.href
                        ? "text-[#6917AF]"
                        : "text-[#172233] hover:text-[#6917AF]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <button className="w-11 h-11 flex items-center justify-center border border-[#2C0A4A] rounded-full">
              <SearchIcon />
            </button>
            <button className="px-6 py-3 border border-[#6917AF] text-[#6917AF] rounded-full font-bold">
              Connect Wallet
            </button>
            <button className="px-6 py-3 border bg-[#6917AF] text-white rounded-full font-bold">
              Host Event
            </button>
          </div>
        )}
      </div>

      <div className="absolute top-12 right-26">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
