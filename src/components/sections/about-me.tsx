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
              Prince is a self-taught web and app developer with expertise in
              Spring Boot, microservices, REST APIs, Node.js, Express.js,
              React.js, Next.js, Flutter, and Jetpack Compose. He is passionate
              about creating scalable, high-performance mobile and web
              applications with a focus on clean code, maintainable
              architecture, and seamless user experiences.
            </Typography>
          </Reavel>

          <Reavel>
            <Typography className={`${spaceGrotesk.className} text-lg`}>
              Since beginning his development journey in 2022, Prince has taken
              a proactive approach to growth, challenging himself with complex
              projects and advancing his skills in frameworks like Spring Boot
              and Jetpack Compose. His goal is to build solutions that not only
              perform exceptionally but are polished and intuitive for users. He
              prioritizes high-quality applications grounded in clean,
              maintainable code and scalable design, always aiming for visually
              engaging, user-centered experiences.
            </Typography>
          </Reavel>

          <Reavel>
            <Typography className={`${spaceGrotesk.className} text-lg`}>
              Driven by a continuous desire for growth, Prince prioritizes
              productivity and seeks projects that expand his skill set. Staying
              focused on his goals, he embraces opportunities to deepen his
              expertise while minimizing distractions. This disciplined approach
              keeps him adaptable, innovative, and ready to tackle complex
              challenges—qualities he believes make him a valuable addition to
              any team striving for excellence.
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
