import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { FaLocationArrow, FaPlay } from "react-icons/fa";
import { homeContents } from "@/data/data";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:pt-36 pt-10">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

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
      <div className="flex md:flex-row flex-col relative mt-20 z-10  mx-auto sm:px-10 px-5">
        {/* Left */}
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
          {homeContents.map((content, i) => (
            <div className="" key={i}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {content.title}
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                {content.description}
              </p>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#project"
              className="group relative inline-flex h-14 overflow-hidden rounded-2xl p-[2px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950/90 backdrop-blur-xl px-8 py-1 text-lg font-semibold text-white gap-3 group-hover:bg-slate-900/90 transition-all duration-300">
                Show My Work
                <FaLocationArrow className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
          <div className="flex flex-wrap gap-8 pt-8 justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative z-10 group">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-80 animate-float shadow-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-80 animate-float delay-1000 shadow-2xl"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-80 animate-float delay-500 shadow-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/exp4.svg"
                alt="Hero illustration"
                width={400}
                height={600}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
