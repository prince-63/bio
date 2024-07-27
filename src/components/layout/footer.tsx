import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
        Prince &nbsp; | &nbsp;
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
