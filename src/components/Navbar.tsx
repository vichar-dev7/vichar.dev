"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center justify-between bg-gray-900 p-4 shadow-lg">
      <div className="text-white font-bold text-lg">MyApp</div>
      <div className="flex items-center space-x-4">
        {/* Display Sign In/Out buttons based on session status */}
        {status === "authenticated" ? (
          <>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-500 transition-all duration-300"
            >
              Sign Out
            </button>
            <span className="text-gray-300">{session.user?.name}</span>
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-all duration-300"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};
