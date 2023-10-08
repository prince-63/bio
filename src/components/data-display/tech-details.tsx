'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';
import ScrollAnimation from '@/hooks/scrollAnimation';
import SkillsReavel from "@/hooks/skillsReavel";

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <ScrollAnimation>
        <SkillsReavel>
          <Link noCustomization href={url} externalLink>
            <ImageWrapper
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={label}
              className="transition-transform duration-300 md:hover:scale-110"
            />
          </Link>
        </SkillsReavel>
      </ScrollAnimation>
      <ScrollAnimation>
        <SkillsReavel>
          <Typography variant="body1">{label}</Typography>
        </SkillsReavel>
      </ScrollAnimation>
    </div>
  );
};

export default TechDetails;
