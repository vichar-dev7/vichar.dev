"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggler from "./ThemeToggler";
import { Input } from "./ui/input";
import UserButton from "./UserButton";
import { Button } from "./ui/button";
import { ArrowLeft, Bell, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const Navbar = ({router} : {router : AppRouterInstance}) => {
  const { data: session, status } = useSession();

  return (
    <header className="bg-[#15202b] border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2" onClick={() => router.back()}>
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Image src="/landscape-placeholder.svg" alt="Vichar.dev logo" width={32} height={32} className="mr-2 rounded-full" />
              <span className="text-xl font-bold">Vichar.dev</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full bg-[#1c2732] text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                />
                <Search
                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
             </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell
                 className="w-5 h-5" />
              </Button>
              <DropdownMenu
            >
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <Image src="/landscape-placeholder.svg" alt="User avatar" width={32} height={32} className="rounded-full mr-2" />
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-[#15202b] border-gray-800">
                  <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-[#1c2732]">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-[#1c2732]">Settings</DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-[#1c2732]">Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
  );
};
