"use client";
import { projects } from "@/data/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ProjectItem({ project, i }: { project: any; i: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500"
      style={{ y, rotateX, transformStyle: "preserve-3d" }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50,
        boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image
            src={
              typeof project.img === "string" &&
              (project.img.startsWith("/") || project.img.startsWith("http"))
                ? project.img
                : "/placeholder.png"
            }
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-4 left-4"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
        >
          <span className="bg-purple-500/20 backdrop-blur-sm text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
            #{String(project.id).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      <motion.div
        className="p-6 space-y-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: i * 0.1 + 0.2 }}
      >
        <motion.h3 className="text-xl font-bold text-white mb-2">
          {project.title}
        </motion.h3>
        <motion.p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectCard() {
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project, i) => (
        <ProjectItem key={project.id} project={project} i={i} />
      ))}
    </motion.div>
  );
}
