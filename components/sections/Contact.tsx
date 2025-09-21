"use client";

import { cn } from "@/lib/utils";
import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <div className="relative min-h-screen mx-auto sm:px-10 px-5 mt-10">
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
      <div className="relative z-10 max-w-6xl mx-auto py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch  
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s collaborate and create
            something amazing together.
          </p>
        </div>

        <ContactForm />

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s turn your vision into reality. I&apos;m here to help
              you build something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                Schedule a Call
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
