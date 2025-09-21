"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactForm() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I&apos;m always excited to discuss new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            through any of the channels below.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-white font-medium">+250781294548</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">+250781294548</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Kigali, Rwanda</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4">Follow me on</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Munyanezainnocent/Munyanezainnocent"
                target="_blank"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 text-sm"
              >
                <Github />
              </a>
              <a
                href="https://www.instagram.com/munyaneza__innocent/"
                target="_blank"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 text-sm"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/in/munyaneza-innocent-b9756b291"
                target="_blank"
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 text-sm"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
        <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="Your email"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
              placeholder="Project Discussion"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
              <textarea
                name="message"
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </div>
      </div>
    </div>
  );
}
