"use client"

import { Plus, Calendar, Users, Trophy, Bell, ChevronDown, Menu, Search, X } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { signIn, signOut, useSession } from "next-auth/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { JetBrains_Mono } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
})

const categories = [
  {
    name: "All",
    hackathons: [],
  },
  {
    name: "Web Development",
    hackathons: [
      {
        id: 1,
        title: "NextJS Innovation Challenge",
        startDate: "2024-03-15",
        endDate: "2024-03-17",
        mode: "Online",
        participants: 500,
        prizePool: "$10,000",
        status: "Upcoming",
      },
      {
        id: 2,
        title: "React Hackathon",
        startDate: "2024-04-01",
        endDate: "2024-04-03",
        mode: "Hybrid",
        participants: 300,
        prizePool: "$15,000",
        status: "Open",
      },
    ],
  },
  {
    name: "AI & Machine Learning",
    hackathons: [
      {
        id: 3,
        title: "AI for Good",
        startDate: "2024-05-10",
        endDate: "2024-05-12",
        mode: "Online",
        participants: 600,
        prizePool: "$20,000",
        status: "Upcoming",
      },
      {
        id: 4,
        title: "NLP Challenge",
        startDate: "2024-06-01",
        endDate: "2024-06-03",
        mode: "In-person",
        participants: 200,
        prizePool: "$12,000",
        status: "Open",
      },
    ],
  },
  {
    name: "Blockchain & Crypto",
    hackathons: [
      {
        id: 5,
        title: "DeFi Innovation",
        startDate: "2024-07-15",
        endDate: "2024-07-17",
        mode: "Online",
        participants: 400,
        prizePool: "$25,000",
        status: "Upcoming",
      },
      {
        id: 6,
        title: "Ethereum Ecosystem Hack",
        startDate: "2024-08-01",
        endDate: "2024-08-03",
        mode: "Hybrid",
        participants: 350,
        prizePool: "$18,000",
        status: "Open",
      },
    ],
  },
]

export default function HackathonsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
  const [isDesktop, setIsDesktop] = useState(false)
  const router = useRouter()
  const {status} = useSession()

  const handleJoinHackathon = (hackathonId: number) => {
    if(status === "authenticated") {
      router.push(`/hackathon/${hackathonId}`)
    } else {
      router.push('/api/auth/signin')
    }
  }

  const handleCreateHackathon = () => {
    if(status === "authenticated") {
      router.push('/hackathon/create')
    } else {
      router.push("/api/auth/signin")
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsDesktop(width >= 1024)
      setIsSidebarExpanded(width >= 1024)
    }
    
    window.addEventListener('resize', handleResize)
    handleResize()
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`flex min-h-screen bg-black text-white ${jetBrainsMono.className}`}>
      <Sidebar isSidebarExpanded={isSidebarExpanded} setIsSidebarExpanded={setIsSidebarExpanded} />

      <div className={cn("flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out", isSidebarExpanded && isDesktop ? "lg:ml-64" : "lg:ml-16")}>
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
                    placeholder="Search hackathons..."
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
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <Image src="/landscape-placeholder.svg" alt="User avatar" width={32} height={32} className="rounded-full" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-[#15202b] border-gray-800">
                    <DropdownMenuLabel className="text-gray-400">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem className="text-white focus:bg-blue-800">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="text-white focus:bg-blue-800">Settings</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem className="text-white focus:bg-blue-800" onClick={() => status === "authenticated" ? signOut() : signIn()}>
                      {status === "authenticated" ? "Sign out" : "Sign in"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            {isSearchOpen && (
              <div className="py-2 sm:hidden">
                <Input
                  type="text"
                  placeholder="Search hackathons..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            )}
          </div>
        </header>

        <main className="flex-grow bg-black px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-full mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Discover Hackathons</h1>
            
            <Card className="bg-[#15202b] border-gray-800 mb-8 rounded-xl overflow-hidden">
              <CardContent className="p-1">
                <nav className="flex items-center space-x-2 space-y-1 overflow-x-auto">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant={selectedCategory === category.name ? "default" : "ghost"}
                      className={cn(
                        "whitespace-nowrap rounded-xl text-xs sm:text-sm",
                        selectedCategory === category.name
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "text-gray-400 hover:text-white hover:bg-[#1c2732]"
                      )}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {categories.map((category, categoryIndex) => {
              if (selectedCategory !== "All" && selectedCategory !== category.name) return null;
              if (category.name === "All") return null;
              return (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-white">{category.name}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {category.hackathons.map((hackathon) => (
                      <Card key={hackathon.id} className="bg-[#15202b] text-white border-gray-800">
                        <CardHeader>
                          <CardTitle className="text-lg sm:text-xl font-bold">{hackathon.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <p className="text-xs sm:text-sm text-gray-400">
                              {hackathon.startDate} - {hackathon.endDate}
                            </p>
                          </div>
                          <div className="flex items-center mb-2">
                            <Users className="w-4 h-4 mr-2" />
                            <p className="text-xs sm:text-sm">{hackathon.participants} participants</p>
                          </div>
                          <div className="flex items-center mb-4">
                            <Trophy className="w-4 h-4 mr-2" />
                            <p className="text-xs sm:text-sm">{hackathon.prizePool} prize pool</p>
                          </div>
                          <Badge 
                            variant={hackathon.status === 'Open' ? 'default' : 'secondary'}
                            className={hackathon.status === 'Open' ? 'bg-green-600' : 'bg-yellow-600'}
                          >
                            {hackathon.status}
                          </Badge>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full text-blue-400 border-blue-400 hover:bg-blue-900" onClick={() => handleJoinHackathon(hackathon.id)}>
                            View Details
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        <footer className="bg-[#15202b] border-t border-gray-800 mt-8">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="md:flex md:items-center md:justify-between">
              
              <div className="mt-8 md:mt-0 md:order-1">
                <p className="text-center text-sm  text-gray-400">&copy; 2024 Vichar.dev. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {status === "authenticated" && (
        <Link href="/hackathon/create" className="fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8">
          <Button className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg">
            <Plus className="w-6 h-6 sm:w-8 sm:h-8" />
          </Button>
        </Link>
      )}
    </div>
  )
}