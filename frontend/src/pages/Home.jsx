import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import headshot from '../assets/image_assets/headshot.webp';
import { content } from '../data/content';
import { useStore } from '../store/useStore';
import GradientText from '../components/GradientText';

const Home = () => {
  return (
    <div className="pt-10 pb-40 flex flex-col justify-center min-h-[calc(100vh-100px)]">

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-10">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-4">

            <GradientText
              colors={["#22D3EE", "#A855F7", "#EC4899"]}
              animationSpeed={3}
              showBorder={false}
              className="font-display text-4xl md:text-6xl font-bold leading-tight pb-2 md:mx-0 md:ml-2"
            >
              Hi, I'm Jeffery
            </GradientText>

            <h2 className="font-display text-xl md:text-2xl text-nebula-cyan font-medium drop-shadow-lg md:ml-3">
              {content.hero.subtitle}
            </h2>

            <p className="font-sans text-lg md:text-xl text-star-400 leading-relaxed max-w-2xl mx-auto md:mx-0 drop-shadow-lg md:ml-3">
              {content.about.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              to="/projects"
              className="font-display group inline-flex items-center gap-2 px-6 py-3 bg-nebula-cyan text-space-950 font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              onClick={(e) => {
                const { viewMode } = useStore.getState();
                if (viewMode === 'galaxy') {
                  e.preventDefault();
                  const { setOrbitSystem, clearActiveSection } = useStore.getState().actions;
                  clearActiveSection();
                  setOrbitSystem('projects');
                }
              }}
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/resume"
              className="font-display inline-flex items-center gap-2 px-6 py-3 border-2 border-nebula-purple/50 text-star-100 font-medium rounded-full hover:bg-nebula-purple/10 hover:border-nebula-purple hover:text-white transition-all duration-300 drop-shadow-lg"
              onClick={(e) => {
                const { viewMode } = useStore.getState();
                if (viewMode === 'galaxy') {
                  e.preventDefault();
                  const { setActiveSection } = useStore.getState().actions;
                  setActiveSection('resume');
                }
              }}
            >
              <FileText size={18} />
              Resume
            </Link>

            <div className="flex items-center gap-4 ml-2">
              <a
                href="https://linkedin.com/in/jefferyye"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-3 border-2 border-nebula-purple/50 text-star-100 font-medium rounded-full hover:bg-nebula-purple/10 hover:border-nebula-purple hover:text-white transition-all duration-300 drop-shadow-lg"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://github.com/jeffery-ye"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-3 border-2 border-nebula-purple/50 text-star-100 font-medium rounded-full hover:bg-nebula-purple/10 hover:border-nebula-purple hover:text-white transition-all duration-300 drop-shadow-lg"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        <div className="relative group shrink-0">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-space-800 shadow-2xl">
            <img
              src={headshot}
              alt="Jeffery Ye"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
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