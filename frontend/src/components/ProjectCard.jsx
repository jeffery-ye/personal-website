import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const Icon = project.icon;

  return (
    <div className="group relative p-6 bg-space-900 rounded-xl border border-space-800 hover:border-nebula-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.1)]">
      
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-space-950 border border-space-800 text-nebula-purple group-hover:text-nebula-cyan transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-star-100 group-hover:text-nebula-cyan transition-colors">
          {project.title}
        </h3>
      </div>

      <p className="text-star-400 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-space-950 border border-space-800 text-nebula-cyan/80">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;