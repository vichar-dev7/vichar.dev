"use client";

import { cn } from "@/lib/utils";
import { LogOutIcon, LogInIcon, Monitor, UserIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { signOut, useSession, signIn } from "next-auth/react";
import ThemeToggler from "./ThemeToggler";

interface UserButtonProps {
  className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>; // Optionally show loading state
  }

  const user = session?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex-none rounded-full", className)}>
          {/* Display avatar only if user is logged in */}
          {user ? <UserAvatar avatarUrl={user?.image || ""} size={40} /> : "Guest"}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {/* Show different label based on login status */}
          {user ? `Logged in as @${user?.name}` : "Not logged in"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {user ? (
          <>
            <Link href={`/users/${user.name}`}>
              <DropdownMenuItem>
                <UserIcon className="mr-2 size-4" />
                Profile
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Monitor className="mr-2 size-4" />
                Theme
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <ThemeToggler />
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                signOut();
              }}
            >
              <LogOutIcon className="mr-2 size-4" />
              Logout
            </DropdownMenuItem>
          </>
        ) : (
          // Show Login option if user is logged out
          <DropdownMenuItem
            onClick={() => {
              signIn();
            }}
          >
            <LogInIcon className="mr-2 size-4" />
            Login
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
