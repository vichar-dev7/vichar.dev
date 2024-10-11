"use client"

import { ArrowLeft, Bell, ChevronDown, MessageSquare, Search, Share2, Users } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClanPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const clanId = params.id

  // This would typically come from an API call based on the clanId
  const clanData = {
    name: "JavaScript Enthusiasts",
    description: "A community for JavaScript developers to share knowledge and discuss the latest trends.",
    memberCount: 1234,
    logo: "/landscape-placeholder.svg",
    color: "bg-purple-500",
  }

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(14,18,23)] text-gray-100">
      {/* Header */}
      <header className="bg-[rgb(14,18,23)] border-b border-gray-800">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2" onClick={() => router.back()}>
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Image src="/landscape-placeholder.svg" alt="Vichar.dev logo" width={32} height={32} className="mr-2" />
              <span className="text-xl font-bold">Vichar.dev</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Image src="/landscape-placeholder.svg" alt="User avatar" width={24} height={24} className="rounded-full mr-2" />
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className={`${clanData.color} mb-8`}>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Image src={clanData.logo} alt={`${clanData.name} logo`} width={64} height={64} className="rounded-full mr-4" />
              <div>
                <CardTitle className="text-2xl">{clanData.name}</CardTitle>
                <p className="text-sm text-gray-300">{clanData.description}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Users className="h-5 w-5" />
                  <span>{clanData.memberCount} members</span>
                </div>
                <div className="space-x-2 flex items-center justify-between">
                  <Button variant="secondary">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button className="bg-purple-200 hover:bg-purple-700">Join Clan</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="feed" className="w-full">
            <TabsList>
              <TabsTrigger value="feed">Feed</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>
            <TabsContent value="feed">
              <Card>
                <CardHeader>
                  <CardTitle>Clan Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Recent activities and posts from the clan will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="discussions">
              <Card>
                <CardHeader>
                  <CardTitle>Discussions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ongoing discussions and threads will be listed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="members">
              <Card>
                <CardHeader>
                  <CardTitle>Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A list of clan members will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[rgb(14,18,23)] border-t border-gray-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-400">
          © 2024 Vichar.dev. All rights reserved.
        </div>
      </footer>
    </div>
  )
}