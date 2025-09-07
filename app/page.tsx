import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full max-w-7xl">
        <Navbar />
        <Hero />
        <div id="about">
          <Skills />
        </div>
        <div id="project">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <Footer />
      </div>
    </div>
  );
}
