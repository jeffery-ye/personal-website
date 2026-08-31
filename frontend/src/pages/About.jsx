import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { content } from '../data/content.jsx';
import GradientText from '../components/GradientText';

const About = () => {
  return (
    <div className="pt-10 pb-20 space-y-8 max-w-4xl mx-auto">
      
      <GradientText
        colors={["#26efff","#921aff","#fa2bff"]}
        animationSpeed={3}
        showBorder={false}
        yoyo={false}
        className="font-display text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg" 
      >
        About Me
      </GradientText>

      <div className="space-y-8 text-lg text-star-400 leading-loose font-sans">
        {(content?.about?.bio ?? []).map((paragraph, index) => (
          <p key={index} className="drop-shadow-lg">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="pt-8 border-t border-space-800">
        <h2 className="font-display text-3xl font-bold text-white mb-8 drop-shadow-lg">
          Let's Connect
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <a 
            href="mailto:s.jeffery.ye@gmail.com"
            className="group flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-space-900 to-space-950 border border-space-800 hover:border-nebula-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] drop-shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-nebula-cyan/10 text-nebula-cyan group-hover:bg-nebula-cyan group-hover:text-space-950 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-nebula-cyan transition-colors drop-shadow-lg">Email Me</h3>
                <p className="font-sans text-star-400 text-sm drop-shadow-lg">Get in touch directly</p>
              </div>
            </div>
            <ArrowRight className="text-star-400 group-hover:text-nebula-cyan group-hover:translate-x-1 transition-transform" />
          </a>

          <a 
            href="https://linkedin.com/in/jefferyye" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-space-900 to-space-950 border border-space-800 hover:border-nebula-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] drop-shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-nebula-purple/10 text-nebula-purple group-hover:bg-nebula-purple group-hover:text-white transition-colors">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-nebula-purple transition-colors drop-shadow-lg">LinkedIn</h3>
                <p className="font-sans text-star-400 text-sm drop-shadow-lg">Connect with me</p>
              </div>
            </div>
            <ArrowRight className="text-star-400 group-hover:text-nebula-purple group-hover:translate-x-1 transition-transform" />
          </a>

        </div>
      </div>
      
    </div>
  );
};

export default About;