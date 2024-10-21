'use client'

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import Sidebar from '@/components/Sidebar'
import { Bell, Search, Menu } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const categories = ["All", "AI", "Web Dev", "Mobile", "DevOps", "Cybersecurity"]
  const posts = [...Array(5)].map((_, idx) => ({
    id: idx,
    author: "John Doe",
    username: "@johndoe",
    time: "2h",
    avatar: "/avatar-placeholder.png",
    content: "Just launched a new open-source project! Check it out and let me know what you think. #OpenSource #TechInnovation",
    comments: 24,
    shares: 12,
    likes: 78,
  }))

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
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar isSidebarExpanded={isSidebarExpanded} setIsSidebarExpanded={setIsSidebarExpanded} />

      <div className={cn("flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out", isSidebarExpanded && isDesktop ? "lg:ml-64" : "lg:ml-16")}>
        <header className="bg-[#15202b] border-b border-gray-800 sticky top-0 z-40 rounded-xl">
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
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <Image src="/avatar-placeholder.png" alt="User avatar" width={32} height={32} className="rounded-full" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-[#15202b] border-gray-800">
                    <DropdownMenuLabel className="text-gray-400">My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem className="text-white focus:bg-blue-800">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="text-white focus:bg-blue-800">Settings</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem className="text-white focus:bg-blue-800">
                      Sign out
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

        <main className="flex-1 p-4 bg-black">
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="All" className="mb-6">
              <TabsList className="bg-[#15202b]">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <Card className="mb-6 p-4 bg-[#15202b] border-gray-800">
              <CardContent>
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/avatar-placeholder.png" alt="@yourusername" />
                    <AvatarFallback>YOU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input placeholder="What's happening?" className="bg-gray-800 border-gray-700" />
                    <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Post</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="bg-[#15202b] border-gray-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={post.avatar} alt={post.username} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{post.author}</h3>
                          <span className="text-gray-400">{post.username}</span>
                          <span className="text-gray-400">· {post.time}</span>
                        </div>
                        <p>{post.content}</p>
                        <div className="flex space-x-4 text-gray-400">
                          <Button variant="ghost" size="sm">💬 {post.comments}</Button>
                          <Button variant="ghost" size="sm">🔁 {post.shares}</Button>
                          <Button variant="ghost" size="sm">❤️ {post.likes}</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}