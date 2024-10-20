"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggler from "./ThemeToggler";
import { Input } from "./ui/input";
import UserButton from "./UserButton";

export const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <header className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Vichar.Dev
        </div>
        <div className="mb-6">
            <Input className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700" placeholder="Search TechConnect" type="search" />
          </div>

          <UserButton/>


        {/* <div className="flex items-center space-x-6">
          <ThemeToggler />

          <div className="flex items-center space-x-4">
            {status === "authenticated" ? (
              <>
                <span className="text-gray-600 dark:text-gray-300">
                  {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md shadow transition duration-300"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md shadow transition duration-300"
              >
                Sign In
              </button>
            )}
          </div>
        </div> */}

      </nav>
    </header>
  );
};
