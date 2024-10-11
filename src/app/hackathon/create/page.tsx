"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

export default function CreateHackathonPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [mode, setMode] = useState('')
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()
  const [prizePool, setPrizePool] = useState('')

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ title, description, mode, startDate, endDate, prizePool })
    // After successful creation, redirect to the hackathons page
    router.push('/hackathons')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-purple-900 py-6">
        <div className="container mx-auto px-4 flex items-center">
          <Button variant="ghost" onClick={() => router.back()} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-bold">Create New Hackathon</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Hackathon Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white"
              rows={4}
            />
          </div>

          <div>
            <label htmlFor="mode" className="block text-sm font-medium mb-2">
              Mode
            </label>
            <Select onValueChange={setMode}>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="in-person">In-person</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                Start Date
              </label>
              <DatePicker
                
                selected={startDate}
                onSelect={setStartDate}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="endDate" className="block text-sm font-medium mb-2">
                End Date
              </label>
              <DatePicker
                
                selected={endDate}
                onSelect={setEndDate}
              />
            </div>
          </div>

          <div>
            <label htmlFor="prizePool" className="block text-sm font-medium mb-2">
              Prize Pool
            </label>
            <Input
              id="prizePool"
              value={prizePool}
              onChange={(e) => setPrizePool(e.target.value)}
              placeholder="e.g. $10,000"
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Create Hackathon
          </Button>
        </form>
      </main>
    </div>
  )
}