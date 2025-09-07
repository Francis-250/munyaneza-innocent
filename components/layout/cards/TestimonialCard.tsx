import { testimonials } from "@/data/data";
import { FaQuoteRight } from "react-icons/fa";

export default function TestimonialCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 py-10">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: "fadeInUp 0.8s ease-out forwards",
          }}
        >
          <div className="absolute top-6 right-6 text-purple-500/30 group-hover:text-purple-500/50 transition-colors duration-300">
            <FaQuoteRight />
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 italic leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-purple-400/80">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  );
}
