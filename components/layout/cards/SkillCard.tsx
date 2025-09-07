"use client";
import { skills } from "@/data/data";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// ✅ Child component (handles per-skill hooks safely)
function SkillItem({ skill, index }: { skill: any; index: number }) {
  const skillRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start end", "end start"],
  });

  const skillY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const skillRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  const getProgressColor = (level: number) => {
    if (level >= 80) return "from-emerald-500 to-green-400";
    if (level >= 70) return "from-blue-500 to-cyan-400";
    if (level >= 60) return "from-purple-500 to-pink-400";
    return "from-orange-500 to-red-400";
  };

  const getLevelText = (level: number) => {
    if (level >= 80) return "Expert";
    if (level >= 70) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <motion.div
      ref={skillRef}
      className="group relative"
      style={{
        y: skillY,
        rotateX: skillRotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50,
        boxShadow: "0 20px 40px -12px rgba(147, 51, 234, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Card body */}
      <motion.div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500">
        <motion.div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 rounded-lg flex items-center justify-center border border-white/20 bg-white/10"
            whileHover={{
              rotate: 360,
              scale: 1.2,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Image
              src={skill.icon}
              alt={`${skill.title} icon`}
              width={24}
              height={24}
            />
          </motion.div>
          <div>
            <motion.h3 className="font-semibold text-white text-lg">
              {skill.title}
            </motion.h3>
            <motion.span className="text-sm text-gray-400">
              {getLevelText(skill.level)}
            </motion.span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden border border-white/10">
          <motion.div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getProgressColor(
              skill.level
            )} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ✅ Parent component (no hooks inside map)
export default function SkillCard() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const y = useTransform(smoothProgress, [0, 1], [30, -30]);

  return (
    <motion.div ref={containerRef} style={{ y }}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}
