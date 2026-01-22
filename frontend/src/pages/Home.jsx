import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import headshot from '../assets/headshot.png';
import { content } from '../data/content';
import GradientText from '../components/GradientText';

const Home = () => {
  return (
    <div className="pt-10 pb-40 flex flex-col justify-center min-h-[calc(100vh-100px)]">
      
      {/* SECTION 1: The Hook (Elevator Pitch + Headshot) */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left: The Pitch */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-4">
            
            <GradientText
              colors={["#22D3EE", "#A855F7", "#EC4899"]}
              animationSpeed={3}
              showBorder={false}
              className="text-4xl md:text-6xl font-bold leading-tight pb-2 md:mx-0 md:ml-3"
            >
              Hi, I'm Jeffery
            </GradientText>
            
            <h2 className="text-xl md:text-2xl text-nebula-cyan font-medium drop-shadow-lg md:ml-4">
              {content.hero.subtitle}
            </h2>

            <p className="text-lg md:text-xl text-star-400 leading-relaxed max-w-2xl mx-auto md:mx-0 drop-shadow-lg md:ml-4">
              {content.about.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link 
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-nebula-cyan text-space-950 font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 border border-space-800 text-star-100 font-medium rounded-full hover:border-nebula-purple hover:text-nebula-purple transition-colors duration-300 drop-shadow-lg"
            >
              <FileText size={18} />
              Resume
            </Link>
          </div>
        </div>

        {/* Right: The Headshot */}
        <div className="relative group shrink-0">
          {/* Glowing Ring Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-nebula-cyan to-nebula-purple rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-space-900 shadow-2xl">
            <img 
              src={headshot} 
              alt="Jeffery Ye" 
              className="w-full h-full object-cover"
              onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}}
            />
            <div className="hidden w-full h-full bg-space-800 items-center justify-center text-star-400">
              No Image
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Home;