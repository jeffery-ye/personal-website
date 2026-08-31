import { Download, FileText } from 'lucide-react';
import resumePdf from '../assets/Resume_JefferyYe.pdf';
import GradientText from '../components/GradientText'

const Resume = () => {
  return (
    <div className="pt-2 pb-10 h-[calc(100vh-64px)] flex flex-col items-center">
      <div className="text-center space-y-6 mb-8 px-4">
        <div className="text-white pt-10">
              <GradientText
                colors={["#26efff","#921aff","#fa2bff"]}
                animationSpeed={3}
                showBorder={false}
                yoyo={false}
                className="font-display text-4xl md:text-6xl font-bold"
                >
                Resume
                </GradientText>
            </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={resumePdf} 
            download="Jeffery_Ye_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-nebula-cyan/10 border border-nebula-cyan/50 rounded-lg text-nebula-cyan font-semibold hover:bg-nebula-cyan hover:text-space-950 transition-all duration-300 drop-shadow-lg"
          >
            <Download size={20} />
            Download PDF
          </a>
          
          <a 
            href={resumePdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-space-800 border border-space-800 rounded-lg text-star-400 hover:text-white hover:border-star-400 transition-all duration-300 drop-shadow-lg"
          >
            <FileText size={20} />
            View in Browser
          </a>
        </div>
      </div>

      <div className="w-full max-w-4xl flex-1 bg-space-950 rounded-xl border-0 overflow-hidden shadow-2xl mx-4">
        <iframe 
          src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
          className="w-full h-full border-0"
          title="Resume PDF"
          style={{ filter: 'invert(0.92) hue-rotate(180deg) contrast(1.2)' }}
        />
      </div>

    </div>
  );
};

export default Resume;