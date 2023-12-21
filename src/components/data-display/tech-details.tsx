'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import spaceGrotesk from '../general/space-grotesk-font';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center gap-2">
      
        {/* <Link noCustomization href={url} externalLink>
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            className="transition-transform duration-300 md:hover:scale-110"
          />
        </Link> */}
     
      <div className='pt-3 pb-3 pl-7 pr-7 rounded-lg border-solid border-2 border-grey-700'>
      <Typography className={`${spaceGrotesk.className} text-xs color-black-900`} variant="body1">{label}</Typography>
      </div>

    </div>
  );
};

export default TechDetails;
