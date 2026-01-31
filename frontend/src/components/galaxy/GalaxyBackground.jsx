import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import StarBackground from '../StarBackground';
import nebulaBg from '../../assets/nebula-bg.png';

const GalaxyBackground = () => {
    const orbitSystem = useStore((state) => state.orbitSystem);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none bg-space-950 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
                {orbitSystem === 'home' && (
                    <motion.div
                        key="stars"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <StarBackground className="absolute" />
                    </motion.div>
                )}

                {orbitSystem === 'projects' && (
                    <motion.div
                        key="nebula"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }} // Fades out and shrinks when leaving
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 opacity-80"
                            style={{
                                backgroundImage: `url(${nebulaBg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                        {/* Overlay to dim it slightly so text pops */}
                        <div className="absolute inset-0 bg-space-950/20" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalaxyBackground;
