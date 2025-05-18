
import AboutMe from "@/Portfolio/About";
import Blogs from "@/Portfolio/Blog";
import ContactMe from "@/Portfolio/Contact";
import GetInTouch from "@/Portfolio/GetInTouch";
import HeroSection from "@/Portfolio/Hero";
import Project from "@/Portfolio/Project";
import Skills from "@/Portfolio/Skill";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Skills />
      <AboutMe />
      <Project />
      <Blogs />
      <ContactMe/>
      <GetInTouch/>
    </div>
  );
}
