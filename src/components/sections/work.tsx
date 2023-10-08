import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Reavel from '@/hooks/Reavel';
import ScrollAnimation from '@/hooks/scrollAnimation';

const WorkSection = () => {
  return (
    <Container id="projects">
      <div className="flex flex-col items-center gap-4">
        <ScrollAnimation>
        <div className="self-center">
          <Tag label="Projects" />
        </div>
        </ScrollAnimation>
        <ScrollAnimation>
        <Reavel>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the projects I have built:
        </Typography>
        </Reavel>
        </ScrollAnimation>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
