import React from "react";

import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import spaceGrotesk from "../general/space-grotesk-font";
import Tag from "@/components/data-display/tag";
import Link from "next/link";

export default function ProjectDetails() {
  return (
    <div className="container mx-auto md:px-6">
      <section className="mb-0 text-center lg:text-left">
        <div className="grid gap-x-6 lg:gap-y-12 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-12 lg:mb-0">
              <div
                className="relative mb-6 overflow-hidden rounded-lg cursor-pointer bg-cover bg-no-repeat shadow-sm dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={project.imageSrc}
                  className="w-full"
                  alt={project.title}
                  style={{ objectFit: "cover" }}
                />
                <a onClick={() => window.open(project.url, "_blank")}>
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
              </div>
              <h5 className="mb-2 text-start text-lg font-bold">
                {project.title}
              </h5>
              <div className="mb-2 flex text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                <a
                  onClick={() => window.open(project.url, "_blank")}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <Github
                    onClick={() => window.open(project.url, "_blank")}
                    size={16}
                  />
                  Github
                  <div className="hover:bg-gray-50 [&_svg]:stroke-gray-500">
                    <ExternalLink width={20} />
                  </div>
                </a>
              </div>
              <p className="text-start mb-2 text-neutral-500 dark:text-neutral-300">
                {project.year}
              </p>
              <p
                className={`${spaceGrotesk.className} text-start mb-4 text-neutral-500 dark:text-neutral-300`}
              >
                {project.description}
              </p>
              <div className="mt-2 flex flex-row justify-between">
                <div className="flex flex-row flex-wrap gap-2 font-medium">
                  {project.tags.map((tag, index) => (
                    <Tag
                      className={`${spaceGrotesk.className} text-lg`}
                      label={tag}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
