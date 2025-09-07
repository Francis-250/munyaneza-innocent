import { cn } from "@/lib/utils";

export default function Grid() {
  return (
    <div className="relative min-h-[50vh] mx-auto sm:px-10 px-5 mt-10">
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
      <div className="z-10 relative text-blue-100">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat
        quos odio ullam quibusdam, obcaecati maxime eaque harum est illum animi
        minus eligendi expedita sequi sed, facilis, error id! Officia.
      </div>
    </div>
  );
}
