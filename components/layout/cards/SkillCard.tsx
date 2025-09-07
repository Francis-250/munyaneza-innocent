"use client";
import { skills } from "@/data/data";
import Image from "next/image";

export default function SkillCard() {
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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className={` ${
                  index === 6 || index === 3
                    ? "bg-gradient-to-br from-gray-200 to-gray-300"
                    : ""
                } w-10 h-10  rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <Image
                  src={skill.icon}
                  alt="Hero illustration"
                  width={400}
                  height={600}
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">
                  {skill.title}
                </h3>
                <span className="text-xs text-gray-400">
                  {getLevelText(skill.level)}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Proficiency</span>
                <span className="text-xs font-medium text-white">
                  {skill.level}%
                </span>
              </div>
              <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getProgressColor(
                    skill.level
                  )} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                  style={{
                    width: `${skill.level}%`,
                    boxShadow: `0 0 10px ${
                      skill.level >= 80
                        ? "#10b981"
                        : skill.level >= 70
                        ? "#3b82f6"
                        : skill.level >= 60
                        ? "#8b5cf6"
                        : "#f97316"
                    }40`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="text-2xl font-bold text-emerald-400">
            {skills.filter((s) => s.level >= 80).length}
          </div>
          <div className="text-sm text-gray-400">Expert Level</div>
        </div>
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="text-2xl font-bold text-blue-400">
            {skills.filter((s) => s.level >= 70 && s.level < 80).length}
          </div>
          <div className="text-sm text-gray-400">Advanced</div>
        </div>
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="text-2xl font-bold text-purple-400">
            {skills.filter((s) => s.level >= 60 && s.level < 70).length}
          </div>
          <div className="text-sm text-gray-400">Intermediate</div>
        </div>
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="text-2xl font-bold text-orange-400">
            {skills.filter((s) => s.level < 60).length}
          </div>
          <div className="text-sm text-gray-400">Learning</div>
        </div>
      </div>
    </div>
  );
}
