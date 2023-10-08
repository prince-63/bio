'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Reavel from '@/hooks/Reavel';
import ScrollAnimation from '@/hooks/scrollAnimation';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <ScrollAnimation>
        <Reavel>
          <Link noCustomization href={url} externalLink>
            <ImageWrapper
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={label}
              className="transition-transform duration-300 md:hover:scale-110"
            />
          </Link>
        </Reavel>
      </ScrollAnimation>
      <ScrollAnimation>
        <Reavel>
          <Typography variant="body1">{label}</Typography>
        </Reavel>
      </ScrollAnimation>
    </div>
  );
};

export default TechDetails;
