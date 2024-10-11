import Link from 'next/link'
import { Plus, Calendar, Users, Trophy } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-purple-900 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Hackathons</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Category Navbar */}
        <Card className="bg-gray-800 border-gray-700 mb-8 rounded-2xl">
          <CardContent className="p-2">
            <nav className="flex space-x-2 overflow-x-auto">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="whitespace-nowrap text-purple-400 font-semibold rounded-2xl"
                >
                  {category.name}
                </Button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Hackathons */}
        {categories.map((category, categoryIndex) => {
          if (category.name === "All") return null;
          return (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.hackathons.map((hackathon) => (
                  <Card key={hackathon.id} className="bg-gray-800 text-white border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{hackathon.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <p className="text-sm text-gray-400">
                          {hackathon.startDate} - {hackathon.endDate}
                        </p>
                      </div>
                      <div className="flex items-center mb-2">
                        <Users className="w-4 h-4 mr-2" />
                        <p className="text-sm">{hackathon.participants} participants</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <Trophy className="w-4 h-4 mr-2" />
                        <p className="text-sm">{hackathon.prizePool} prize pool</p>
                      </div>
                      <Badge 
                        variant={hackathon.status === 'Open' ? 'default' : 'secondary'}
                        className={hackathon.status === 'Open' ? 'bg-green-600' : 'bg-yellow-600'}
                      >
                        {hackathon.status}
                      </Badge>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full text-purple-400 border-purple-400 hover:bg-purple-900">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </main>

      <Link href="/hackathon/create" className="fixed bottom-8 right-8">
        <Button className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700">
          <Plus className="w-8 h-8" />
        </Button>
      </Link>
    </div>
  )
}
