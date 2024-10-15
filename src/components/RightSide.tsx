import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const RightSide = () => {
  return (
    <aside className="w-full lg:w-80 border-l border-gray-200 dark:border-gray-800 p-4 hidden lg:block">
      <h2 className="text-lg font-semibold mb-4">
        <span>{"<"}</span> Trending Technologies <span>{"/>"}</span>
      </h2>
      <ul className="space-y-2 mb-6">
        {["Rust", "Kubernetes", "GraphQL", "NextJS", "Solidity"].map((tech) => (
          <li key={tech} className="text-gray-700 dark:text-gray-300">
            #{tech}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-4">Top Coders to Follow</h2>
      <ul className="space-y-4">
        {[
          { name: "Algo Master", title: "Algorithm Expert", avatar: "/dev-avatar.jpg" },
          { name: "Frontend Hero", title: "UI/UX Enthusiast", avatar: "/dev-avatar2.jpg" },
          { name: "Blockchain Wizard", title: "Smart Contract Developer", avatar: "/dev-avatar3.jpg" },
        ].map((coder) => (
          <li key={coder.name} className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src={coder.avatar} alt={coder.name} />
              <AvatarFallback>{coder.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{coder.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{coder.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};
