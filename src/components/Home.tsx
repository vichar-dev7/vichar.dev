'use client'
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI", "Web Dev", "Mobile", "DevOps", "Cybersecurity"];
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
  }));

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="All" className="mb-6">
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-gray-300 dark:data-[state=active]:bg-gray-700"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Card className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <CardContent>
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src="/avatar-placeholder.png" alt="@yourusername" />
                  <AvatarFallback>YOU</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Input placeholder="What's happening?" className="bg-gray-200 dark:bg-gray-900" />
                  <Button className="mt-2 h-10 w-10 bg-gray-400">Post</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={post.avatar} alt={post.username} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{post.author}</h3>
                        <span className="text-gray-500 dark:text-gray-400">{post.username}</span>
                        <span className="text-gray-500 dark:text-gray-400">· {post.time}</span>
                      </div>
                      <p>{post.content}</p>
                      <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
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
  );
}
