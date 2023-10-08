import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Reavel from '@/hooks/Reavel';
import transition from '@/hooks/transition';
import ScrollAnimation from '@/hooks/scrollAnimation';

const SkillsSection = () => {
  return (
    <Container id='skills'>
      <div className="flex flex-col items-center gap-4">
        <ScrollAnimation>
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        </ScrollAnimation>
        <ScrollAnimation>
        <Reavel>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The tools and technologies I am explored in my life:
        </Typography>
        </Reavel>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default transition(SkillsSection);
