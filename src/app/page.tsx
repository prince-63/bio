'use client';
import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
// import ExperienceSection from '@/components/sections/experiences';
import TestimonialsSection from '@/components/sections/testimonials';
import WorkSection from '@/components/sections/work';
import { motion, useScroll } from "framer-motion";


export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed transform origin-left top-200 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        style={{ scaleX: scrollYProgress}}
      />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <TestimonialsSection />
      {/* <ExperienceSection /> */}
      <WorkSection />
      <ContactSection />
    </>
  );
}
