"use client";

import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import ScrollAnimation from "@/hooks/scrollAnimation";
import spaceGrotesk from "../general/space-grotesk-font";
import Reavel from "@/hooks/Reavel";
import Typography from "../general/typography";
import ProjectDetails from "../data-display/project-details";

export default function ProjectSection() {
  return (
    <Container id="project" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <ScrollAnimation>
          <div className="self-center">
            <Tag
              className={`${spaceGrotesk.className} text-lg`}
              label="Featured Projects"
            />
          </div>
        </ScrollAnimation>

        <Typography
          variant="subtitle"
          className={`${spaceGrotesk.className} max-w-lg text-center`}
        >
          Here are some of the selected projects that showcase my passion for
          backend development.
        </Typography>
      </div>

      <div>
        <ProjectDetails />
      </div>
    </Container>
  );
}
