import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import ScrollAnimation from '@/hooks/scrollAnimation';
import spaceGrotesk from '../general/space-grotesk-font';
import TechDetail from '../data-display/tech-details';

const SkillsSection = () => {
  return (
    <Container id='skills'>
      <div className="flex flex-col items-center gap-4">
        <ScrollAnimation>
          <div className="self-center">
            <Tag className={`${spaceGrotesk.className} text-lg`} label="Core Skills" />
          </div>
        </ScrollAnimation>
      </div>

      {/* grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12 */}
      <div className="flex gap-6 flex-wrap justify-center">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetail {...technology} key={index} />
        ))}
      </div>

    </Container>
  );
};

export default SkillsSection;