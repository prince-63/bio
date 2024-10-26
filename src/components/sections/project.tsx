"use client";

import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import ScrollAnimation from "@/hooks/scrollAnimation";
import spaceGrotesk from "../general/space-grotesk-font";
import Typography from "../general/typography";
import ProjectDetails from "../data-display/project-details";
import Reavel from "@/hooks/Reavel";

export default function ProjectSection() {
  return (
    <Container id="project" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <ScrollAnimation>
          <div className="self-center">
            <Tag
              className={`${spaceGrotesk.className} text-lg`}
              label="Projects"
            />
          </div>
        </ScrollAnimation>

        <Reavel>
          <Typography
            variant="subtitle"
            className={`${spaceGrotesk.className} max-w-lg text-center`}
          >
            Here are some projects that showcase Prince&apos;s passion for web
            and app development.
          </Typography>
        </Reavel>
      </div>

      <div>
        <ProjectDetails />
      </div>
    </Container>
  );
}
