import PublicationCard from '../components/PublicationCard';
import { content } from '../data/content';
import GradientText from '../components/GradientText';

const Publications = () => {
  return (
    <div className="space-y-12">

      <div className="text-center space-y-4">
        <div className="text-white pt-10">
          <GradientText
            colors={["#26efff", "#921aff", "#fa2bff"]}
            animationSpeed={3}
            showBorder={false}
            yoyo={false}
            className="font-display text-4xl md:text-6xl font-bold py-2"
          >
            Publications
          </GradientText>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.publications.data.map((pub) => (
          <PublicationCard key={pub.id} publication={pub} />
        ))}
      </div>

    </div>
  );
};

export default Publications;
