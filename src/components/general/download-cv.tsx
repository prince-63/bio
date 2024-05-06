'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('https://github.com/prince-63/bio/tree/main/public/files/Resume.pdf', '_blank')}>
      Get Resume
    </Button>
  );
};

export default DownloadCV;
