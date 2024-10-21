"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Calendar, Users, Trophy, Globe, Tag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CreateHackathonPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [mode, setMode] = useState('')
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()
  const [prizePool, setPrizePool] = useState('')
  const [maxParticipants, setMaxParticipants] = useState('')
  const [tags, setTags] = useState('')
  const [requirements, setRequirements] = useState('')

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ title, description, mode, startDate, endDate, prizePool, maxParticipants, tags, requirements })
    // After successful creation, redirect to the hackathons page
    router.push('/hackathons')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-[#15202b] border-b border-gray-800 py-6">
        <div className="container mx-auto px-4 flex items-center">
          <Button variant="ghost" onClick={() => router.back()} className="mr-4 text-gray-300 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-bold">Create New Hackathon</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#15202b] border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Hackathon Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-300">
                      Hackathon Title
                    </label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="bg-[#1c2732] border-gray-700 text-white"
                      placeholder="Enter hackathon title"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mode" className="block text-sm font-medium text-gray-300">
                      Mode
                    </label>
                    <Select onValueChange={setMode}>
                      <SelectTrigger className="bg-[#1c2732] border-gray-700 text-white">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1c2732] border-gray-700">
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="in-person">In-person</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="bg-[#1c2732] border-gray-700 text-white"
                    rows={4}
                    placeholder="Describe your hackathon"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-300">
                      Start Date
                    </label>
                    <DatePicker
                      selected={startDate}
                      onSelect={setStartDate}
                      className="bg-[#1c2732] border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-300">
                      End Date
                    </label>
                    <DatePicker
                      selected={endDate}
                      onSelect={setEndDate}
                      className="bg-[#1c2732] border-gray-700 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="prizePool" className="block text-sm font-medium text-gray-300">
                      Prize Pool
                    </label>
                    <Input
                      id="prizePool"
                      value={prizePool}
                      onChange={(e) => setPrizePool(e.target.value)}
                      placeholder="e.g. $10,000"
                      className="bg-[#1c2732] border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="maxParticipants" className="block text-sm font-medium text-gray-300">
                      Max Participants
                    </label>
                    <Input
                      id="maxParticipants"
                      value={maxParticipants}
                      onChange={(e) => setMaxParticipants(e.target.value)}
                      placeholder="e.g. 500"
                      type="number"
                      className="bg-[#1c2732] border-gray-700 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-300">
                    Tags
                  </label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Enter tags separated by commas"
                    className="bg-[#1c2732] border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-300">
                    Requirements
                  </label>
                  <Textarea
                    id="requirements"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="bg-[#1c2732] border-gray-700 text-white"
                    rows={3}
                    placeholder="List any specific requirements for participants"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Create Hackathon
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-[#15202b] border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl">Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{title || "Hackathon Title"}</h2>
                <p className="text-gray-300">{description || "Hackathon description will appear here."}</p>
                <div className="flex flex-wrap gap-2">
                  {mode && (
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      <Globe className="w-4 h-4 mr-1" />
                      {mode}
                    </Badge>
                  )}
                  {startDate && endDate && (
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      <Calendar className="w-4 h-4 mr-1" />
                      {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                    </Badge>
                  )}
                  {maxParticipants && (
                    <Badge variant="secondary" className="bg-yellow-600 text-white">
                      <Users className="w-4 h-4 mr-1" />
                      {maxParticipants} participants
                    </Badge>
                  )}
                  {prizePool && (
                    <Badge variant="secondary" className="bg-purple-600 text-white">
                      <Trophy className="w-4 h-4 mr-1" />
                      {prizePool} prize pool
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.split(',').map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-blue-500 text-blue-400">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag.trim()}
                    </Badge>
                  ))}
                </div>
                {requirements && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                    <p className="text-gray-300">{requirements}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}