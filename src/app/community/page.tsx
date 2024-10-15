"use client"

import { Bell, ChevronDown, Menu, MessageSquare, Plus, Search, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { signIn, signOut, useSession } from "next-auth/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const categories = [
  {
    name: "All",
    clans: [],
  },
  {
    name: "Languages",
    clans: [
      { id: "js", name: "JavaScript Enthusiasts", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
      { id: "py", name: "Python Devs", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
      { id: "rust", name: "Rust Innovators", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
    ],
  },
  {
    name: "AI & Machine Learning",
    clans: [
      { id: "dl", name: "Deep Learning Pioneers", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
      { id: "nlp", name: "NLP Researchers", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
      { id: "cv", name: "Computer Vision Experts", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
    ],
  },
  {
    name: "Web3 & Blockchain",
    clans: [
      { id: "eth", name: "Ethereum Developers", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
      { id: "defi", name: "DeFi Innovators", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
      { id: "nft", name: "NFT Creators", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
    ],
  },
]

const yourClans = [
  { id: "ys1", name: "Your Clan 1", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
  { id: "ys2", name: "Your Clan 2", color: "bg-purple-900", hover: "hover:bg-purple-800", logo: "/landscape-placeholder.svg" },
]

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const router = useRouter()
  const {status} = useSession()

  const handleJoinClan = (clanId: string) => {
    if(status === "authenticated") {
      router.push(`/community/${clanId}`)
    } else {
      router.push('/api/auth/signin')
    }
  }

  const handleCreateClan = () => {
    if(status === "authenticated") {
      router.push('/community/createclan')
    } else {
      router.push("/api/auth/signin")
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsDesktop(width >= 1024)
      if (width < 1024) {
        setIsSidebarCollapsed(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    handleResize()
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/landscape-placeholder.svg" alt="Vichar.dev logo" width={32} height={32} className="mr-2" />
              </Link>
              <Link href="/" className="text-xl font-bold">Vichar.dev</Link>
            </div>
            <div className="flex items-center space-x-4">
            <Link href="/hackathon" className="text-white hover:text-purple-400">Hackathons</Link>
              <Link href="/techmemes" className="text-white hover:text-purple-400">Tech</Link>
              {isSearchOpen ? (
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsSearchOpen(true)}>
                  <Search className="w-5 h-5" />
                </Button>
              )}
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="w-5 h-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <Image src="/landscape-placeholder.svg" alt="User avatar" width={24} height={24} className="rounded-full mr-2" />
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {status === "authenticated" ? (
                    <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem onClick={() => signIn()}>Sign in</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow bg-black">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            
            {/* Sidebar */}
            <aside className={cn(
              "lg:transition-all lg:duration-300 relative",
              isDesktop
                ? isSidebarCollapsed ? "lg:w-20" : "lg:w-64"
                : "w-full lg:w-64"
            )}>
              {isDesktop && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -right-3 top-0 bg-gray-800 rounded-full hidden lg:flex"
                  onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                >
                  <ChevronRight className={cn("h-4 w-4 transition-transform", isSidebarCollapsed ? "rotate-0" : "rotate-180")} />
                </Button>
              )}
              <nav className="space-y-1 mb-8">
                <Link href="#" className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-md">
                  <Menu className="h-5 w-5 flex-shrink-0" />
                  <span className={cn("ml-3", isDesktop && isSidebarCollapsed ? "lg:hidden" : "")}>Feed</span>
                </Link>
                <Link href="#" className="flex items-center px-4 py-2 text-white hover:bg-gray-800 rounded-md">
                  <MessageSquare className="h-5 w-5 flex-shrink-0" />
                  <span className={cn("ml-3", isDesktop && isSidebarCollapsed ? "lg:hidden" : "")}>Clans</span>
                </Link>
              </nav>
              <div className="mb-8">
                <h2 className={cn("text-lg font-semibold mb-4 text-white", isDesktop && isSidebarCollapsed ? "lg:hidden" : "")}>Your Clans</h2>
                <div className="space-y-2">
                  {yourClans.map((clan) => (
                    <Card key={clan.id} className={`${clan.color} ${clan.hover} transition-colors duration-200`}>
                      <CardHeader className="p-4 flex flex-row items-center space-y-0">
                        <Image src={clan.logo} alt={`${clan.name} logo`} width={24} height={24} className="rounded-full flex-shrink-0" />
                        <CardTitle className={cn("text-sm text-white ml-2", isDesktop && isSidebarCollapsed ? "lg:hidden" : "")}>{clan.name}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
              <Button 
                className={cn(
                  "w-full bg-purple-600 hover:bg-purple-700 text-white",
                  isDesktop && isSidebarCollapsed ? "lg:px-2" : ""
                )} 
                onClick={handleCreateClan}
              >
                <Plus className="h-5 w-5 flex-shrink-0" />
                <span className={cn("ml-2", isDesktop && isSidebarCollapsed ? "lg:hidden" : "")}>Create Clan</span>
              </Button>
            </aside>

            {/* Main section */}
            <div className="flex-grow">
              <h1 className="text-2xl font-bold mb-4 text-white">Discover Clans</h1>
              
              {/* Category Navbar */}
              <Card className="bg-gray-800 border-gray-700 mb-8 rounded-2xl">
                <CardContent className="p-2">
                  <nav className="flex space-x-2 overflow-x-auto">
                    {categories.map((category, index) => (
                      <Button
                        key={index}
                        variant={selectedCategory === category.name ? "outline" : "ghost"}
                        className="whitespace-nowrap text-purple-400 font-semibold rounded-2xl"
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Clans */}
              {categories.map((category, categoryIndex) => {
                if (selectedCategory !== "All" && selectedCategory !== category.name) return null;
                if (category.name === "All") return null;
                return (
                  <div key={categoryIndex} className="mb-8">
                    <h2 className="text-lg font-semibold mb-4 text-white">{category.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.clans.map((clan) => (
                        <Card key={clan.id} className={`${clan.color} ${clan.hover} transition-colors duration-200`}>
                          <CardHeader className="flex flex-row items-center space-y-0">
                            <Image src={clan.logo} alt={`${clan.name} logo`} width={40} height={40} className="rounded-full mr-4" />
                            <CardTitle className="text-white">
  <div className="flex items-center space-x-1">
    <span>{"</"}</span>
    <span className="font-semibold">{clan.name}</span>
    <span >{">"}</span>
  </div>
</CardTitle>

                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-300 mb-4">Join the discussion on {clan.name.toLowerCase()}...</p>
                            <Button variant="secondary" className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={() => handleJoinClan(clan.id)}>
                              Join Clan
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-400">
          © 2024 Vichar.dev Open Source.
        </div>
      </footer>

      {/* Create Clan Button */}
      {status === "authenticated" ? <Link href="/community/createclan" className="fixed bottom-8 right-8">
        <Button className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700">
          <Plus className="w-8 h-8" />
        </Button>
      </Link> : <Link href="/api/auth/signin" className="fixed bottom-8 right-8">
        <Button className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700">
          <Plus className="w-8 h-8" />
        </Button>
      </Link>}
    </div>
  )
}