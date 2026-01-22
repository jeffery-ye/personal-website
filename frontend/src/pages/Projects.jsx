import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content';

const Projects = () => {
  return (
    <div className="space-y-12 pt-8">
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-nebula-cyan drop-shadow-lg">
          My Work
        </h1>
        <p className="text-4xl md:text-2xl text-star-500 drop-shadow-lg">
          A collection of agents, interfaces, and data pipelines I've built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
    </div>
  );
};

export default Projects;