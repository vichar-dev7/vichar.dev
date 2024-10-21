"use client"

import { useState } from 'react'
import { ArrowLeft, Bell, ChevronDown, MessageSquare, Search, Share2, Users, Plus, Sparkles, X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Navbar } from '@/components/Navbar'

export default function ClanPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const clanId = params.id
  const [activeTab, setActiveTab] = useState("feed")
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  // This would typically come from an API call based on the clanId
  const clanData = {
    name: "JavaScript Enthusiasts",
    description: "A community for JavaScript developers to share knowledge and discuss the latest trends.",
    memberCount: 1234,
    logo: "/landscape-placeholder.svg",
    color: "bg-blue-600",
    posts: [
      { id: 1, title: "Hello World! Start your squad journey here", author: "John Doe", avatar: "/landscape-placeholder.svg", content: "Welcome to our JavaScript Enthusiasts clan! This is the perfect place to start your journey into the world of JavaScript. Whether you're a beginner or an experienced developer, we're excited to have you here. Let's learn and grow together!", image: "/landscape-placeholder.svg", date: "Apr 17", readTime: "2 min read" },
      { id: 2, title: "Understanding Closures in JavaScript", author: "Jane Smith", avatar: "/landscape-placeholder.svg", content: "Closures are a fundamental concept in JavaScript that often confuse newcomers. In this post, we'll dive deep into what closures are, how they work, and why they're so powerful. We'll cover practical examples and use cases to help solidify your understanding.", image: "/landscape-placeholder.svg", date: "May 5", readTime: "5 min read" },
      { id: 3, title: "ES2022 Features You Should Know", author: "Alice Johnson", avatar: "/landscape-placeholder.svg", content: "ECMAScript 2022 brings several exciting new features to JavaScript. In this post, we'll explore the most important additions and how they can improve your code. From top-level await to new array methods, get ready to supercharge your JavaScript skills!", image: "/landscape-placeholder.svg", date: "Jun 12", readTime: "4 min read" },
      { id: 4, title: "Optimizing React Performance", author: "Bob Williams", avatar: "/landscape-placeholder.svg", content: "Is your React application running slower than you'd like? This post will guide you through various techniques to optimize your React components and overall application performance. Learn about memoization, lazy loading, and other advanced concepts to make your app lightning fast!", image: "/landscape-placeholder.svg", date: "Jul 3", readTime: "6 min read" },
    ],
  }

  type Post = typeof clanData.posts[0]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar router={router}/>

      {/* Main content */}
      <main className="flex-grow bg-black">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className={`${clanData.color} mb-8`}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Image src={clanData.logo} alt={`${clanData.name} logo`} width={64} height={64} className="rounded-full mr-4" />
              <div className="flex-grow">
                <CardTitle className="text-2xl">{clanData.name}</CardTitle>
                <p className="text-sm text-gray-200">{clanData.description}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Users className="h-5 w-5" />
                  <span>{clanData.memberCount} members</span>
                </div>
                <Button className="bg-[#1c2732] text-white hover:bg-[#2c3742]">Join Clan</Button>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-[#15202b] border-b border-gray-800 p-0">
              <TabsTrigger value="feed" className="px-4 py-2 text-gray-400 hover:text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500">Feed</TabsTrigger>
              <TabsTrigger value="discussions" className="px-4 py-2 text-gray-400 hover:text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500">Discussions</TabsTrigger>
              <TabsTrigger value="members" className="px-4 py-2 text-gray-400 hover:text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500">Members</TabsTrigger>
            </TabsList>
            <TabsContent value="feed" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {clanData.posts.map((post) => (
                  <Card key={post.id} className="bg-[#15202b] border-gray-800 cursor-pointer hover:bg-[#1c2732] transition-colors" onClick={() => setSelectedPost(post)}>
                    <CardContent className="p-4">
                      <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-40 object-cover rounded-md mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="discussions" className="mt-4">
              <Card className="bg-[#15202b] border-gray-800">
                <CardHeader>
                  <CardTitle>Discussions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Ongoing discussions and threads will be listed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="members" className="mt-4">
              <Card className="bg-[#15202b] border-gray-800">
                <CardHeader>
                  <CardTitle>Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">A list of clan members will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#15202b] border-t border-gray-800 mt-8">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <p className="text-gray-400">© 2024 Vichar.dev. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      {/* Post Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="bg-[#15202b] text-white border-gray-800 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">{selectedPost?.title}</DialogTitle>
            <DialogDescription className="text-gray-400 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="mr-2">
                  <AvatarImage src={selectedPost?.avatar} alt={selectedPost?.author} />
                  <AvatarFallback>{selectedPost?.author[0]}</AvatarFallback>
                </Avatar>
                <span>{selectedPost?.author}</span>
              </div>
              <div>
                <span className="mr-2">{selectedPost?.date}</span>
                <span>{selectedPost?.readTime}</span>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Image src={selectedPost?.image || ''} alt={selectedPost?.title || ''} width={800} height={400} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-gray-300">{selectedPost?.content}</p>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white hover:bg-[#1c2732]">
                <Sparkles className="mr-2 h-4 w-4" />
                Like
              </Button>
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white hover:bg-[#1c2732]">
                <MessageSquare className="mr-2 h-4 w-4" />
                Comment
              </Button>
            </div>
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white hover:bg-[#1c2732]">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}