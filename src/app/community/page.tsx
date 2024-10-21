"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  ChevronDown,
  Menu,
  MessageSquare,
  Plus,
  Search,
  X,
  ChevronRight,
  Users,
  Calendar,
  Hash,
  Home,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const categories = [
  { name: "All", clans: [] },
  {
    name: "Languages",
    clans: [
      {
        id: "js",
        name: "JavaScript Enthusiasts",
        color: "bg-yellow-600",
        hover: "hover:bg-yellow-700",
        logo: "/landscape-placeholder.svg",
        description: "For JS lovers and learners",
        members: 1200,
        events: 5,
        tags: ["frontend", "nodejs"],
      },
      {
        id: "py",
        name: "Python Devs",
        color: "bg-blue-600",
        hover: "hover:bg-blue-700",
        logo: "/landscape-placeholder.svg",
        description: "Python programmers unite!",
        members: 1500,
        events: 3,
        tags: ["backend", "data-science"],
      },
      {
        id: "rust",
        name: "Rust Innovators",
        color: "bg-orange-600",
        hover: "hover:bg-orange-700",
        logo: "/landscape-placeholder.svg",
        description: "Exploring Rust's potential",
        members: 800,
        events: 2,
        tags: ["systems", "webassembly"],
      },
    ],
  },
  {
    name: "AI & ML",
    clans: [
      {
        id: "dl",
        name: "Deep Learning Pioneers",
        color: "bg-green-600",
        hover: "hover:bg-green-700",
        logo: "/landscape-placeholder.svg",
        description: "Pushing AI boundaries",
        members: 1000,
        events: 4,
        tags: ["neural-networks", "computer-vision"],
      },
      {
        id: "nlp",
        name: "NLP Researchers",
        color: "bg-indigo-600",
        hover: "hover:bg-indigo-700",
        logo: "/landscape-placeholder.svg",
        description: "Decoding language with AI",
        members: 750,
        events: 2,
        tags: ["text-analysis", "chatbots"],
      },
      {
        id: "cv",
        name: "Computer Vision Experts",
        color: "bg-purple-600",
        hover: "hover:bg-purple-700",
        logo: "/landscape-placeholder.svg",
        description: "Making machines see",
        members: 900,
        events: 3,
        tags: ["image-processing", "object-detection"],
      },
    ],
  },
  {
    name: "Web3",
    clans: [
      {
        id: "eth",
        name: "Ethereum Developers",
        color: "bg-blue-500",
        hover: "hover:bg-blue-600",
        logo: "/landscape-placeholder.svg",
        description: "Building the decentralized future",
        members: 1100,
        events: 5,
        tags: ["smart-contracts", "dapps"],
      },
      {
        id: "defi",
        name: "DeFi Innovators",
        color: "bg-green-500",
        hover: "hover:bg-green-600",
        logo: "/landscape-placeholder.svg",
        description: "Revolutionizing finance",
        members: 950,
        events: 4,
        tags: ["yield-farming", "liquidity-pools"],
      },
      {
        id: "nft",
        name: "NFT Creators",
        color: "bg-pink-500",
        hover: "hover:bg-pink-600",
        logo: "/landscape-placeholder.svg",
        description: "Exploring digital ownership",
        members: 850,
        events: 3,
        tags: ["digital-art", "collectibles"],
      },
    ],
  },
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  const handleJoinClan = (clanId: string) => {
    if (status === "authenticated") {
      router.push(`/community/${clanId}`);
    } else {
      router.push("/api/auth/signin");
    }
  };

  const handleCreateClan = () => {
    if (status === "authenticated") {
      router.push("/community/createclan");
    } else {
      router.push("/api/auth/signin");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
      setIsSidebarExpanded(width >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex min-h-screen bg-black text-white ${jetBrainsMono.className}`}
    >
      <Sidebar
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />

      <div
        className={cn(
          "flex min-h-screen flex-1 flex-col transition-all duration-300 ease-in-out",
          isSidebarExpanded && isDesktop ? "lg:ml-64" : "lg:ml-16",
        )}
      >
        {/* <Navbar router={router} /> */}
        <header className="bg-[#15202b] border-b border-gray-800 sticky top-0 z-40">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}> 
                  <Menu className="h-6 w-6" />
                </Button>
                {(!isSidebarExpanded || !isDesktop) && (
                  <Link href="/" className="flex items-center">
                    <Image src="/landscape-placeholder.svg" alt="Vichar.dev logo" width={32} height={32} className="rounded-full" />
                    <span className="ml-2 text-xl font-bold text-white">Vichar.dev</span>
                  </Link>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative hidden sm:block">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
                <Button variant="ghost" size="icon" className="rounded-full sm:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Bell className="w-5 h-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm"   className="rounded-full">
                      <Image src="/landscape-placeholder.svg" alt="User avatar" width={32} height={32} className="rounded-full" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-[#15202b] border-gray-800">
                    <DropdownMenuLabel className="text-gray-400">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem className="text-white focus:bg-blue-800">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white focus:bg-blue-800">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem className="text-white focus:bg-blue-800" onClick={() => status === "authenticated" ? signOut() : signIn()}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>{status === "authenticated" ? "Sign out" : "Sign in"}</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            {isSearchOpen && (
              <div className="py-2 sm:hidden">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            )}
          </div>
        </header>

        <main className="flex-grow bg-black px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-full">
            <h1 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
              Discover Clans
            </h1>

            <Card className="mb-8 overflow-hidden rounded-xl border-gray-800 bg-[#15202b]">
              <CardContent className="p-1">
                <nav className="flex items-center space-x-2 space-y-1 overflow-x-auto">
                  {categories.map((category, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant={
                          selectedCategory === category.name
                            ? "default"
                            : "ghost"
                        }
                        className={cn(
                          "whitespace-nowrap rounded-xl text-xs sm:text-sm",
                          selectedCategory === category.name
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "text-gray-400 hover:bg-[#1c2732] hover:text-white",
                        )}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        {category.name}
                      </Button>
                    </motion.div>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {categories.map((category, categoryIndex) => {
              if (
                selectedCategory !== "All" &&
                selectedCategory !== category.name
              )
                return null;
              if (category.name === "All") return null;
              return (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="mb-6 text-xl font-semibold text-white sm:text-2xl">
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {category.clans.map((clan) => (
                      <motion.div
                        key={clan.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-full"
                      >
                        <Card
                          className={`${clan.color} ${clan.hover} h-full overflow-hidden transition-colors duration-200`}
                        >
                          <CardHeader className="flex flex-row items-center space-y-0 p-4">
                            <Image
                              src={clan.logo}
                              alt={`${clan.name} logo`}
                              width={48}
                              height={48}
                              className="mr-3 rounded-full"
                            />
                            <div>
                              <CardTitle className="text-base font-bold text-white sm:text-lg">
                                {clan.name}
                              </CardTitle>
                              <CardDescription className="mt-1 text-xs text-gray-300">
                                {clan.description}
                              </CardDescription>
                            </div>
                          </CardHeader>
                          <CardContent className="p-4">
                            <div className="mb-3 flex items-center justify-between text-xs sm:text-sm">
                              <div className="flex items-center text-gray-300">
                                <Users className="mr-1 h-4 w-4" />
                                <span>{clan.members}</span>
                              </div>
                              <div className="flex items-center text-gray-300">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>{clan.events} events</span>
                              </div>
                            </div>
                            <div className="mb-3 flex flex-wrap gap-1">
                              {clan.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="bg-[#1c2732] text-xs text-gray-300"
                                >
                                  <Hash className="mr-1 h-3 w-3" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                variant="secondary"
                                className="w-full bg-blue-600 text-sm text-white hover:bg-blue-700"
                                onClick={() => handleJoinClan(clan.id)}
                              >
                                Join Clan
                              </Button>
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        <footer className="mt-8 border-t border-gray-800 bg-[#15202b]">
          <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mt-8 md:order-1 md:mt-0">
                <p className="text-center text-sm text-gray-400">
                  &copy; 2024 Vichar.dev. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {status === "authenticated" && (
        <Link
          href="/community/createclan"
          className="fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button className="h-12 w-12 rounded-full bg-blue-600 shadow-lg hover:bg-blue-700 sm:h-16 sm:w-16">
              <Plus className="h-6 w-6 sm:h-8 sm:w-8" />
            </Button>
          </motion.div>
        </Link>
      )}
    </div>
  );
}
