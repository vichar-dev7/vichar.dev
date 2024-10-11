"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from 'lucide-react'

export default function CreateClan() {
  const [clanName, setClanName] = useState('')
  const [clanDescription, setClanDescription] = useState('')
  const [clanTags, setClanTags] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ clanName, clanDescription, clanTags })
    // After successful creation, redirect to the new clan page
    router.push('/community/new-clan-id')
  }

  return (
    <div className="min-h-screen bg-[rgb(14,18,23)] text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Create a New Clan</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="clanName" className="block text-sm font-medium text-gray-300">
                  Clan Name
                </label>
                <Input
                  id="clanName"
                  value={clanName}
                  onChange={(e) => setClanName(e.target.value)}
                  required
                  className="mt-1 bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="clanDescription" className="block text-sm font-medium text-gray-300">
                  Description
                </label>
                <Textarea
                  id="clanDescription"
                  value={clanDescription}
                  onChange={(e) => setClanDescription(e.target.value)}
                  required
                  className="mt-1 bg-gray-700 text-white"
                  rows={4}
                />
              </div>
              <div>
                <label htmlFor="clanTags" className="block text-sm font-medium text-gray-300">
                  Tags (comma separated)
                </label>
                <Input
                  id="clanTags"
                  value={clanTags}
                  onChange={(e) => setClanTags(e.target.value)}
                  className="mt-1 bg-gray-700 text-white"
                  placeholder="e.g. programming, web development, AI"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Create Clan
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}