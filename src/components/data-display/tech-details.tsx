'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';
import ScrollAnimation from '@/hooks/scrollAnimation';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <ScrollAnimation>
        <Link noCustomization href={url} externalLink>
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            className="transition-transform duration-300 md:hover:scale-110"
          />
        </Link>
      </ScrollAnimation>
      <ScrollAnimation>
        <Typography variant="body1">{label}</Typography>
      </ScrollAnimation>
    </div>
  );
};

export default TechDetails;
