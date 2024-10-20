import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { Github, Twitter, Linkedin, Globe, MapPin, Calendar, Mail, Link2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import React from 'react'
import { Badge } from '@/components/ui/badge'

const Page = async () => {
    const session = await getServerSession(authOptions)
  console.log(session?.user)
    return (
        <div>
            {session ? (
             <div className="container mx-auto p-6 max-w-4xl">
             <Card>
               <CardContent className="p-6">
                 <div className="flex flex-col md:flex-row gap-6">
                   <div className="flex flex-col items-center md:items-start gap-4">
                     <Avatar className="w-32 h-32 border-4 border-primary">
                       <AvatarImage src="/placeholder.svg?height=128&width=128" alt="User avatar" />
                       <AvatarFallback>JD</AvatarFallback>
                     </Avatar>
                     <div className="text-center md:text-left">
                       <h1 className="text-2xl font-bold">{session.user?.name}</h1>
                       <p className="text-muted-foreground">@{session.user?.image}</p>
                     </div>
                     <div className="flex gap-2">
                       <Button>Follow</Button>
                       <Button variant="outline">Message</Button>
                     </div>
                   </div>
                   <div className="flex-grow">
                     <p className="mb-4">Full-stack developer passionate about creating scalable web applications and exploring new technologies. Open source contributor and tech community organizer.</p>
                     <div className="grid grid-cols-2 gap-4 mb-4">
                       <div className="flex items-center gap-2">
                         <MapPin className="w-4 h-4 text-muted-foreground" />
                         <span>San Francisco, CA</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <Globe className="w-4 h-4 text-muted-foreground" />
                         <a href="https://janedoe.dev" className="text-primary hover:underline">janedoe.dev</a>
                       </div>
                       <div className="flex items-center gap-2">
                         <Calendar className="w-4 h-4 text-muted-foreground" />
                         <span>Joined March 2015</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <Mail className="w-4 h-4 text-muted-foreground" />
                         <a href="mailto:jane@example.com" className="text-primary hover:underline">{session.user?.email}</a>
                       </div>
                     </div>
                     <div className="flex gap-4 mb-4">
                       <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer">
                         <Button variant="outline" size="icon">
                           <Github className="h-4 w-4" />
                         </Button>
                       </a>
                       <a href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer">
                         <Button variant="outline" size="icon">
                           <Twitter className="h-4 w-4" />
                         </Button>
                       </a>
                       <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">
                         <Button variant="outline" size="icon">
                           <Linkedin className="h-4 w-4" />
                         </Button>
                       </a>
                     </div>
                     <div className="flex flex-wrap gap-2">
                       <Badge variant="secondary">React</Badge>
                       <Badge variant="secondary">Node.js</Badge>
                       <Badge variant="secondary">TypeScript</Badge>
                       <Badge variant="secondary">GraphQL</Badge>
                       <Badge variant="secondary">Docker</Badge>
                     </div>
                   </div>
                 </div>
               </CardContent>
             </Card>
       
             <Tabs defaultValue="posts" className="mt-6">
               <TabsList>
                 <TabsTrigger value="posts">Posts</TabsTrigger>
                 <TabsTrigger value="projects">Projects</TabsTrigger>
                 <TabsTrigger value="contributions">Open Source</TabsTrigger>
               </TabsList>
               <TabsContent value="posts">
                 <Card>
                   <CardHeader>
                     <CardTitle>Recent Posts</CardTitle>
                     <CardDescription>Jane's latest thoughts and insights</CardDescription>
                   </CardHeader>
                   <CardContent>
                     <ScrollArea className="h-[400px]">
                       {[1, 2, 3, 4, 5].map((post) => (
                         <div key={post} className="mb-4 p-4 border rounded-lg">
                           <h3 className="font-semibold mb-2">Optimizing React Performance: Tips and Tricks</h3>
                           <p className="text-sm text-muted-foreground mb-2">
                             In this post, I share some advanced techniques for improving the performance of your React applications...
                           </p>
                           <div className="flex justify-between text-xs text-muted-foreground">
                             <span>2 days ago</span>
                             <span>5 min read</span>
                           </div>
                         </div>
                       ))}
                     </ScrollArea>
                   </CardContent>
                 </Card>
               </TabsContent>
               <TabsContent value="projects">
                 <Card>
                   <CardHeader>
                     <CardTitle>Featured Projects</CardTitle>
                     <CardDescription>Showcase of Jane's recent work</CardDescription>
                   </CardHeader>
                   <CardContent>
                     <ScrollArea className="h-[400px]">
                       {[1, 2, 3].map((project) => (
                         <div key={project} className="mb-4 p-4 border rounded-lg">
                           <h3 className="font-semibold mb-2">TechSocial - A Developer-Focused Social Platform</h3>
                           <p className="text-sm text-muted-foreground mb-2">
                             A social media platform built specifically for developers, featuring code sharing, tech discussions, and project collaboration.
                           </p>
                           <div className="flex items-center gap-2 mt-2">
                             <Badge>React</Badge>
                             <Badge>Node.js</Badge>
                             <Badge>MongoDB</Badge>
                           </div>
                           <div className="flex items-center gap-4 mt-4">
                             <a href="#" className="text-primary hover:underline flex items-center gap-1">
                               <Link2 className="w-4 h-4" />
                               <span>Live Demo</span>
                             </a>
                             <a href="#" className="text-primary hover:underline flex items-center gap-1">
                               <Github className="w-4 h-4" />
                               <span>Source Code</span>
                             </a>
                           </div>
                         </div>
                       ))}
                     </ScrollArea>
                   </CardContent>
                 </Card>
               </TabsContent>
               <TabsContent value="contributions">
                 <Card>
                   <CardHeader>
                     <CardTitle>Open Source Contributions</CardTitle>
                     <CardDescription>Jane's impact on the open source community</CardDescription>
                   </CardHeader>
                   <CardContent>
                     <ScrollArea className="h-[400px]">
                       {[1, 2, 3, 4].map((contribution) => (
                         <div key={contribution} className="mb-4 p-4 border rounded-lg">
                           <h3 className="font-semibold mb-2">React - Improved Performance in Concurrent Mode</h3>
                           <p className="text-sm text-muted-foreground mb-2">
                             Contributed a significant performance improvement for React's Concurrent Mode, reducing render times by 15% in certain scenarios.
                           </p>
                           <div className="flex justify-between items-center mt-2">
                             <Badge variant="outline">Merged</Badge>
                             <a href="#" className="text-primary hover:underline flex items-center gap-1">
                               <Github className="w-4 h-4" />
                               <span>View Pull Request</span>
                             </a>
                           </div>
                         </div>
                       ))}
                     </ScrollArea>
                   </CardContent>
                 </Card>
               </TabsContent>
             </Tabs>
           </div>
            ) : (
                <p>No session found</p>
            )}
        </div>
    )
}

export default Page
