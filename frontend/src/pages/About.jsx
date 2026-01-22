import headshot from '../assets/headshot.png';
import { content } from '../data/content';
import GradientText from '../components/GradientText';
const About = () => {
  return (
    <div className="pt-10 pb-20 space-y-16">
      <GradientText
        colors={["#26efff","#921aff","#fa2bff"]}
        animationSpeed={3}
        showBorder={false}
        yoyo={false}
        className="text-4xl md:text-6xl font-bold leading-tight" 
        >
        About Me
        </GradientText>

      <div className="space-y-8 text-lg text-star-400 leading-loose">
        {content.about.bio.map((paragraph, index) => (
          <p key={index} className="drop-shadow-lg">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Optional: Add a "Fun Facts" or "Hobbies" section here later */}
      
    </div>
  );
};
export default About;