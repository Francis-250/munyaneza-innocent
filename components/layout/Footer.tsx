import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Wrench,
  Shield,
  ExternalLink,
  Heart,
} from "lucide-react";
import { socialLinks } from "@/data/data";
import { quickLinks, services } from "@/types";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-slate-800">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(147,51,234,0.1)_35%,rgba(147,51,234,0.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(59,130,246,0.1)_35%,rgba(59,130,246,0.1)_65%,transparent_65%)] bg-[length:20px_20px]" />
      </div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Branding & About */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Innocent
                  </span>
                </h2>
                <p className="text-gray-400 max-w-md leading-relaxed">
                  IT Support & CCTV Specialist based in Kigali. I provide
                  professional solutions in CCTV installation, PC
                  troubleshooting, networking, and IT system maintenance to
                  ensure smooth and secure operations.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+250 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Kigali, Rwanda</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-slate-800/50 hover:bg-slate-700/50 p-3 rounded-lg border border-slate-700/50 hover:border-purple-500/50 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20`}
                      aria-label={social.name}
                    >
                      {React.createElement(IconComponent, {
                        className: "w-5 h-5",
                      })}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-slate-800">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Get the latest updates on IT tips, maintenance guides, and CCTV
                security insights straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                />
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>by Innocent</span>
              <Shield className="w-4 h-4 text-purple-400" />
            </div>

            <button
              className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-purple-500/50 p-3 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
  