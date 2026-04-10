import { ExternalLink, FileText } from 'lucide-react';

const PublicationCard = ({ publication }) => {
  const Icon = publication.icon || FileText;

  // Assuming user is Jeffery Ye
  const renderAuthors = (authors) => {
    return authors.map((author, index) => {
      const isJeffery = author === "Jeffery Ye";
      return (
        <span key={index}>
          {isJeffery ? <span className="font-bold text-white">{author}</span> : author}
          {index < authors.length - 1 ? ", " : ""}
        </span>
      );
    });
  };

  return (
    <div className="group relative p-6 bg-space-900 rounded-xl border border-space-800 hover:border-nebula-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.1)] flex flex-col h-full">

      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-space-950 border border-space-800 text-nebula-purple group-hover:text-nebula-cyan transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-star-100 group-hover:text-nebula-cyan transition-colors leading-tight">
          {publication.title}
        </h3>
      </div>

      <div className="mb-4">
        <p className="text-sm text-star-300 mb-1 leading-relaxed">
          {renderAuthors(publication.authors)}
        </p>
        <p className="text-xs text-nebula-purple italic">
          {publication.venue} • {publication.year}
        </p>
      </div>

      <p className="text-star-400 mb-6 leading-relaxed flex-grow text-sm">
        {publication.abstract}
      </p>

      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {publication.tags?.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-space-950 border border-space-800 text-nebula-cyan/80">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {publication.doi && (
            <a
              href={publication.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-star-100 bg-space-800 border border-space-700 rounded-lg hover:bg-nebula-purple/20 hover:border-nebula-purple hover:text-white transition-all duration-300"
            >
              <ExternalLink size={16} />
              DOI
            </a>
          )}
          {publication.arxiv && (
            <a
              href={publication.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-star-100 bg-space-800 border border-space-700 rounded-lg hover:bg-nebula-purple/20 hover:border-nebula-purple hover:text-white transition-all duration-300"
            >
              <ExternalLink size={16} />
              arXiv
            </a>
          )}
          {publication.pdf && (
            <a
              href={publication.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-star-100 bg-space-800 border border-space-700 rounded-lg hover:bg-nebula-purple/20 hover:border-nebula-purple hover:text-white transition-all duration-300"
            >
              <FileText size={16} />
              PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
