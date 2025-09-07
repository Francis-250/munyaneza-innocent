import { navItems } from "@/data/data";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-lg border border-white/10 bg-gray-900/80 px-8 py-4 shadow-lg backdrop-blur-md">
      {navItems.map((navItem, i) => (
        <Link
          key={i}
          href={navItem.link}
          className="relative flex items-center space-x-2 text-neutral-200 transition-colors hover:text-white"
        >
          <span className="text-sm font-medium">{navItem.name}</span>
        </Link>
      ))}
    </nav>
  );
}
