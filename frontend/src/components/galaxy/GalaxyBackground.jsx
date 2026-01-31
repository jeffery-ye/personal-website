import { motion, AnimatePresence } from 'framer-motion';
import StarBackground from '../StarBackground';

const GalaxyBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none bg-space-950 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
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
