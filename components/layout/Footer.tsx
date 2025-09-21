"use client";
import React, { useRef } from "react";
import {
  Phone,
  MapPin,
  ArrowUp,
  Shield,
  ExternalLink,
  Heart,
  MessageCircle,
} from "lucide-react";
import { socialLinks } from "@/data/data";
import { quickLinks, services } from "@/types";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const socialIconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300,
      },
    },
  };

  return (
    <motion.footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-slate-800 overflow-hidden"
      style={{ y }}
    >
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #9333ea 0%, transparent 50%), radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Branding */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <motion.h2
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Innocent
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-400 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.2, stiffness: 300 }}
            >
              IT Support & CCTV Specialist based in Kigali. I provide
              professional solutions in CCTV installation, PC troubleshooting,
              networking, and IT system maintenance to ensure smooth and secure
              operations.
            </motion.p>

            {/* Contact Links */}
            <motion.div className="space-y-3 text-gray-300">
              {[
                {
                  icon: MessageCircle,
                  text: "+250781294548",
                  href: "tel:+250781294548",
                },
                {
                  icon: Phone,
                  text: "+250781294548",
                  href: "tel:+250781294548",
                },
                { icon: MapPin, text: "Kigali, Rwanda", href: "#" },
              ].map((contact) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center space-x-3 hover:text-purple-400 transition-colors group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <contact.icon className="w-4 h-4" />
                  </motion.div>
                  <span className="text-sm group-hover:underline">
                    {contact.text}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialIconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    className={`bg-slate-800/50 hover:bg-slate-700/50 p-3 rounded-lg border border-slate-700/50 hover:border-purple-500/50 text-gray-400 ${social.color} transition-all duration-300 group`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="w-5 h-5 group-hover:drop-shadow-lg" />
                    </motion.div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ x: 10 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </motion.div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ x: 10 }}
                >
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </motion.div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>&copy; {currentYear} Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400" />
            </motion.div>
            <span>by Innocent</span>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="w-4 h-4 text-purple-400" />
            </motion.div>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-purple-500/50 p-3 rounded-lg text-gray-400 hover:text-purple-400 transition-all group"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
