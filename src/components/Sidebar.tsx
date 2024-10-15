import { Button } from "./ui/button";
import { Bell, Hash, Home, MessageSquare, Settings, User } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen sticky top-0 border-r border-gray-200 dark:border-gray-800 p-4 hidden md:block">
      <h1 className="text-2xl font-bold mb-8">Vichar.Dev</h1>
      <nav className="space-y-4">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Hash className="mr-2 h-4 w-4" />
          Explore
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4" />
          Messages
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <User className="mr-2 h-4 w-4" />
          Profile
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
    </aside>
  );
};
