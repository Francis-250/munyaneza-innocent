import { cn } from "@/lib/utils";
import ProjectCard from "../layout/cards/ProjectCard";

export default function Experience() {
  return (
    <div className="relative min-h-[50vh] mx-auto sm:px-10 px-5 mt-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a23] via-[#000319] to-[#1a0a2e]">
        <div
          className={cn(
            "absolute inset-0 opacity-30",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(147,51,234,0.1)_1px,transparent_1px)]",
            "animate-pulse"
          )}
        />

        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      <div className="z-10 relative text-blue-100">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Featured Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover my latest work showcasing modern web development with
            cutting-edge technologies
          </p>
        </div>
        <ProjectCard />
      </div>
    </div>
  );
}
