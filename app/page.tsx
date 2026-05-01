import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Articles />
      <Footer />
    </main>
  );
}
