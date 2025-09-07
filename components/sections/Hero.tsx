"use client";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { FaLocationArrow } from "react-icons/fa";
import { homeContents } from "@/data/data";
import Image from "next/image";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const statsVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="md:pt-36 pt-10 relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a23] via-[#000319] to-[#1a0a2e]">
        <motion.div
          className={cn(
            "absolute inset-0 opacity-30",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(147,51,234,0.1)_1px,transparent_1px)]"
          )}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="flex md:flex-row flex-col relative mt-20 z-10 mx-auto sm:px-10 px-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left */}
        <motion.div
          className="flex flex-col items-center justify-center text-center md:items-start md:text-left"
          variants={itemVariants}
        >
          {homeContents.map((content, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgb(147,51,234)",
                }}
              >
                {content.title.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1 + index * 0.02,
                      type: "spring",
                      damping: 12,
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="text-lg text-gray-300 mb-6"
                variants={itemVariants}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                {content.description}
              </motion.p>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href="#project"
              className="group relative inline-flex h-14 overflow-hidden rounded-2xl p-[2px] focus:outline-none"
              whileHover={{ boxShadow: "0 0 20px rgba(147,51,234,0.5)" }}
            >
              <span
                className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] 
                bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
              />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950/90 backdrop-blur-xl px-8 py-1 text-lg font-semibold text-white gap-3 group-hover:bg-slate-900/90 transition-all duration-300">
                Show My Work
                <motion.div
                  whileHover={{ x: 5, rotate: 45 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaLocationArrow />
                </motion.div>
              </span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8 pt-8 justify-center lg:justify-start"
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { num: "50+", label: "Projects" },
              { num: "5+", label: "Years Experience" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={statsVariants}
                whileHover={{ scale: 1.1, rotateY: 10, z: 50 }}
                className="text-center lg:text-left"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="text-3xl font-bold text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: i * 0.1,
                  }}
                >
                  {stat.num}
                </motion.div>
                <motion.div
                  className="text-sm text-gray-400"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={itemVariants}
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        >
          <div className="relative z-10 group">
            <motion.div
              className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                whileHover={{ z: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/exp4.svg"
                  alt="Hero illustration"
                  width={400}
                  height={600}
                  className="relative z-10 drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
