"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  BrainCog,
  Home,
  MessageSquare,
  Plus,
  Settings,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const yourClans = [
  {
    id: "ys1",
    name: "Your Clan 1",
    color: "bg-blue-900",
    hover: "hover:bg-blue-800",
    logo: "/landscape-placeholder.svg",
  },
  {
    id: "ys2",
    name: "Your Clan 2",
    color: "bg-blue-900",
    hover: "hover:bg-blue-800",
    logo: "/landscape-placeholder.svg",
  },
];

export default function Sidebar({
  isSidebarExpanded,
  setIsSidebarExpanded,
}: {
  isSidebarExpanded: boolean;
  setIsSidebarExpanded: (expanded: boolean) => void;
}) {
  const [isDesktop, setIsDesktop] = useState(true);
  const pathname = usePathname();
  console.log(pathname);

  

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
      setIsSidebarExpanded(width >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSidebarExpanded]);

  const SidebarContent = () => (
    <div className="flex h-full flex-col items-center">
      <div className="mb-6 flex w-full items-center justify-between">
        {isSidebarExpanded && (
          <Link href="/" className="flex items-center">
            <Image
              src="/landscape-placeholder.svg"
              alt="Vichar.dev logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="ml-2 text-xl font-bold text-white">
              Vichar.dev
            </span>
          </Link>
        )}
        {!isDesktop && isSidebarExpanded && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarExpanded(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
      <nav className="mb-8 w-full space-y-4">
        <Link
          href="/"
          className="flex items-center rounded-md px-2 py-2 text-white transition-colors duration-200 hover:bg-blue-800"
        >
          <Home className="h-5 w-5 flex-shrink-0" />
          {isSidebarExpanded && <span className="ml-3">Home</span>}
        </Link>
        <Link
          href="/community"
          className="flex items-center rounded-md px-2 py-2 text-white transition-colors duration-200 hover:bg-blue-800"
        >
          <MessageSquare className="h-5 w-5 flex-shrink-0" />
          {isSidebarExpanded && <span className="ml-3">Community</span>}
        </Link>
        <Link
          href="/profile"
          className="flex items-center rounded-md px-2 py-2 text-white transition-colors duration-200 hover:bg-blue-800"
        >
          <User className="h-5 w-5 flex-shrink-0" />
          {isSidebarExpanded && <span className="ml-3">Profile</span>}
        </Link>
        <Link
          href="/hackathon"
          className="flex items-center rounded-md px-2 py-2 text-white transition-colors duration-200 hover:bg-blue-800"
        >
          <BrainCog className="h-5 w-5 flex-shrink-0" />
          {isSidebarExpanded && <span className="ml-3">Hackathon</span>}
        </Link>
        <Link
          href="#"
          className="flex items-center rounded-md px-2 py-2 text-white transition-colors duration-200 hover:bg-blue-800"
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {isSidebarExpanded && <span className="ml-3">Settings</span>}
        </Link>
      </nav>
      {isSidebarExpanded && (
        <>
          <div className="mb-8 w-full">
            {pathname === "/community" && <h2 className="mb-4 text-lg font-semibold text-white">
              Your Clans
            </h2>}
            <div className="space-y-2">
              {pathname === "/community" && yourClans.map((clan) => (
                <motion.div
                  key={clan.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={`${clan.color} ${clan.hover} transition-colors duration-200`}
                  >
                    <CardHeader className="flex flex-row items-center space-y-0 p-4">
                      <Image
                        src={clan.logo}
                        alt={`${clan.name} logo`}
                        width={24}
                        height={24}
                        className="flex-shrink-0 rounded-full"
                      />
                      <CardTitle className="ml-2 text-sm text-white">
                        {clan.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-auto w-full">
            {pathname === "/community" && <Button
              className="w-full bg-blue-600 text-white transition-colors duration-200 hover:bg-blue-700"
              
            >
              <Plus className="mr-2 h-5 w-5 flex-shrink-0" />
              <Link href={`/community/createclan`}>Create Clan</Link>
            </Button>}
          </div>
        </>
      )}
    </div>
  );

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 transform bg-[#15202b] transition-all duration-300 ease-in-out",
        isSidebarExpanded ? "w-64" : "w-16",
        !isDesktop && !isSidebarExpanded && "-translate-x-full",
      )}
      onMouseEnter={() => isDesktop && setIsSidebarExpanded(true)}
      onMouseLeave={() => isDesktop && setIsSidebarExpanded(false)}
    >
      <div className="h-full overflow-y-auto px-3 py-4">
        <SidebarContent />
      </div>
    </aside>
  );
}
