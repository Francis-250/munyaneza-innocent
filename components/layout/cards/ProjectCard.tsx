"use client";
import { projects } from "@/data/data";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project, i) => {
        const cardRef = useRef(null);
        const { scrollYProgress: cardProgress } = useScroll({
          target: cardRef,
          offset: ["start end", "end start"],
        });

        const y = useTransform(cardProgress, [0, 1], [50, -50]);
        const rotateX = useTransform(cardProgress, [0, 0.5, 1], [15, 0, -15]);

        return (
          <motion.div
            key={project.id}
            ref={cardRef}
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500"
            variants={cardVariants}
            style={{
              y,
              rotateX,
              transformStyle: "preserve-3d",
            }}
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
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={
                    typeof project.img === "string" &&
                    (project.img.startsWith("/") ||
                      project.img.startsWith("http"))
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
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <span className="bg-purple-500/20 backdrop-blur-sm text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
                  #{String(project.id).padStart(2, "0")}
                </span>
              </motion.div>

              {/* Hover overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.div
              className="p-6 space-y-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              <motion.h3
                className="text-xl font-bold text-white mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.4 }}
              >
                {project.description}
              </motion.p>
            </motion.div>

            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.1), transparent)",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
