'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    // <Button onClick={() => window?.open('https://github.com/prince-63/bio/tree/main/public/files/Resume.pdf', '_blank')}>
    //   Get Resume
    // </Button>
    <Button>
      <a href="https://prince-63.github.io/bio/files/Resume.pdf" download>Get Resume</a>
    </Button>
  );
};

export default DownloadCV;
