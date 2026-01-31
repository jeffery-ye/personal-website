import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import StarBackground from '../StarBackground';

const GalaxyBackground = () => {
    const orbitSystem = useStore((state) => state.orbitSystem);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none bg-space-950 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
                {/* Always render stars, but maybe fade them a bit when in nebula mode if desired. 
                    For now, keep them persistent or crossfade if we want 'home' to have specific stars. 
                    Given the new direction, let's keep a consistent starfield for 'home' 
                    and maybe a subtle one for 'projects' behind the nebula.
                    
                    Simpler approach: Just render the StarBackground always, but animate it if needed.
                */}
                <motion.div
                    key="stars"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <StarBackground className="absolute" />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default GalaxyBackground;
