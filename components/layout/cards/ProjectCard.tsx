import { projects } from "@/data/data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded overflow-hidden hover:border-purple-500/50 transition-all duration-500"
        >
          <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
            <Image
              src={
                typeof project.img === "string" &&
                (project.img.startsWith("/") || project.img.startsWith("http"))
                  ? project.img
                  : "/placeholder.png"
              }
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-purple-500/20 backdrop-blur-sm text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
                #{String(project.id).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
