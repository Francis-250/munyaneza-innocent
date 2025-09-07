"use client";
import { skills } from "@/data/data";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

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

  const skillCardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div ref={containerRef} style={{ y }}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => {
          const skillRef = useRef(null);
          const { scrollYProgress: skillProgress } = useScroll({
            target: skillRef,
            offset: ["start end", "end start"],
          });

          const skillY = useTransform(skillProgress, [0, 1], [20, -20]);
          const skillRotateX = useTransform(
            skillProgress,
            [0, 0.5, 1],
            [10, 0, -10]
          );

          return (
            <motion.div
              key={index}
              ref={skillRef}
              variants={skillCardVariants}
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
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(45deg, ${
                    skill.level >= 80
                      ? "#10b981"
                      : skill.level >= 70
                      ? "#3b82f6"
                      : skill.level >= 60
                      ? "#8b5cf6"
                      : "#f97316"
                  }20, transparent, ${
                    skill.level >= 80
                      ? "#10b981"
                      : skill.level >= 70
                      ? "#3b82f6"
                      : skill.level >= 60
                      ? "#8b5cf6"
                      : "#f97316"
                  }20)`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.div
                    className={`${
                      index === 6 || index === 3
                        ? "bg-gradient-to-br from-gray-200 to-gray-300"
                        : "bg-white/10"
                    } w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20`}
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      boxShadow: `0 0 20px ${
                        skill.level >= 80
                          ? "#10b981"
                          : skill.level >= 70
                          ? "#3b82f6"
                          : skill.level >= 60
                          ? "#8b5cf6"
                          : "#f97316"
                      }50`,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <Image
                      src={skill.icon}
                      alt={`${skill.title} icon`}
                      width={24}
                      height={24}
                      className="relative z-10"
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="font-semibold text-white text-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill.title}
                    </motion.h3>
                    <motion.span
                      className="text-sm text-gray-400"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      {getLevelText(skill.level)}
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <motion.span
                      className="text-sm font-medium text-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: index * 0.05 + 0.8,
                      }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getProgressColor(
                        skill.level
                      )} rounded-full`}
                      variants={progressBarVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={skill.level}
                      style={{
                        boxShadow: `0 0 15px ${
                          skill.level >= 80
                            ? "#10b981"
                            : skill.level >= 70
                            ? "#3b82f6"
                            : skill.level >= 60
                            ? "#8b5cf6"
                            : "#f97316"
                        }40`,
                      }}
                      whileHover={{
                        boxShadow: `0 0 25px ${
                          skill.level >= 80
                            ? "#10b981"
                            : skill.level >= 70
                            ? "#3b82f6"
                            : skill.level >= 60
                            ? "#8b5cf6"
                            : "#f97316"
                        }60`,
                      }}
                    />

                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute top-0 left-0 h-full w-full"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        width: "30px",
                      }}
                      animate={{
                        x: ["-30px", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                        delay: index * 0.1 + 1,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Floating particles effect */}
                <motion.div
                  className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [-5, -15, -5],
                    x: [-2, 2, -2],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats Section with enhanced animations */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        variants={statsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            count: skills.filter((s) => s.level >= 80).length,
            label: "Expert Level",
            color: "emerald-400",
            bgColor: "emerald-500/10",
            borderColor: "emerald-500/30",
          },
          {
            count: skills.filter((s) => s.level >= 70 && s.level < 80).length,
            label: "Advanced",
            color: "blue-400",
            bgColor: "blue-500/10",
            borderColor: "blue-500/30",
          },
          {
            count: skills.filter((s) => s.level >= 60 && s.level < 70).length,
            label: "Intermediate",
            color: "purple-400",
            bgColor: "purple-500/10",
            borderColor: "purple-500/30",
          },
          {
            count: skills.filter((s) => s.level < 60).length,
            label: "Learning",
            color: "orange-400",
            bgColor: "orange-500/10",
            borderColor: "orange-500/30",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={statsVariants}
            className={`text-center bg-${stat.bgColor} backdrop-blur-sm border border-${stat.borderColor} rounded-xl p-6 group hover:scale-105 transition-all duration-300`}
            whileHover={{
              y: -5,
              boxShadow: `0 20px 40px -12px rgba(147, 51, 234, 0.2)`,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className={`text-4xl font-bold text-${stat.color} mb-2`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: i * 0.1 + 0.5,
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.5 },
              }}
            >
              {stat.count}
            </motion.div>
            <motion.div
              className="text-sm text-gray-400 font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.7 }}
            >
              {stat.label}
            </motion.div>

            {/* Hover glow effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r from-${stat.color}/0 via-${stat.color}/5 to-${stat.color}/0 rounded-xl opacity-0 group-hover:opacity-100`}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
