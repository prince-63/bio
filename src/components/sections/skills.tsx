"use client";

import { TECHNOLOGIES } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import ScrollAnimation from "@/hooks/scrollAnimation";
import spaceGrotesk from "../general/space-grotesk-font";
import TechDetail from "../data-display/tech-details";
import Typography from "../general/typography";
import Reavel from "@/hooks/Reavel";

const SkillsSection = () => {
  return (
    <Container id="skills">
      <div className="flex flex-col items-center gap-4">
        <ScrollAnimation>
          <div className="self-center">
            <Tag
              className={`${spaceGrotesk.className} text-lg`}
              label="Skills"
            />
          </div>
        </ScrollAnimation>
        <Reavel>
          <Typography
            variant="subtitle"
            className={`${spaceGrotesk.className} sm:max-w-xl text-center`}
          >
            Here are some key skills that demonstrate Prince&apos;s expertise
            and passion for web and app development.
          </Typography>
        </Reavel>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetail {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
