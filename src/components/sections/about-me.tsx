"use client";

import Image from "next/image";
import PrinceKumar from "../../../public/images/about_image.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Reavel from "@/hooks/Reavel";
import spaceGrotesk from "../general/space-grotesk-font";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag className={`${spaceGrotesk.className} text-lg`} label="About" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <Reavel>
            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
              <Image
                src={PrinceKumar}
                alt="Fullpose of Sagar"
                className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                style={{ objectFit: "cover" }}
              ></Image>
              <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
            </div>
          </Reavel>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-3">
          <Reavel>
            <Typography
              variant="h5"
              className={`${spaceGrotesk.className} text-lg`}
            >
              Curious about Prince? Here&apos;s a bit of his journey:
            </Typography>
          </Reavel>

         <Reavel>
          <Typography className={`${spaceGrotesk.className} text-lg`}>
            Prince is a Developer with expertise in Application Development. He is passionate about building scalable, high-performance applications that combine clean code, maintainable architecture, and seamless user experiences.
          </Typography>
        </Reavel>
          
        <Reavel>
          <Typography className={`${spaceGrotesk.className} text-lg`}>
            Since beginning his development journey in 2022, Prince has worked on challenging projects, sharpening his skills in modern frameworks and technologies. His commitment to creating polished, intuitive solutions makes him a valuable collaborator for teams aiming to deliver exceptional user experiences.
          </Typography>
        </Reavel>

          <Reavel>
            <Typography className={`${spaceGrotesk.className} text-lg`}>
              Always eager to take on new challenges, Prince prioritizes innovation and continuous learning. His disciplined and goal-oriented mindset ensures that he brings adaptability, creativity, and impact to every project, making him an ideal partner for exciting collaborations or professional opportunities.
            </Typography>
          </Reavel>

          <Reavel>
            <Typography
              variant={"h6"}
              className={`${spaceGrotesk.className} text-lg font-bold`}
            >
              Finally, a few quick bits about Prince:
            </Typography>
          </Reavel>
          <div className="flex flex-col gap-2">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Reavel>
                <Typography
                  component="li"
                  className={`${spaceGrotesk.className} text-lg`}
                >
                  Pursuing a B.Tech in CSE
                </Typography>
              </Reavel>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Reavel>
                <Typography
                  component="li"
                  className={`${spaceGrotesk.className} text-lg`}
                >
                  An avid learner
                </Typography>
              </Reavel>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
