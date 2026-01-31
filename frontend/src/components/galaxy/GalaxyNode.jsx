import { motion } from 'framer-motion';


const GalaxyNode = ({ id, label, x, y, type = 'node', color = 'bg-white', size = 'w-4 h-4', onClick, shouldAnimate = true }) => {


    // Portal Styling (e.g. Projects Cluster)
    const isPortal = type === 'portal';
    const finalColor = isPortal ? 'bg-amber-100 shadow-[0_0_30px_rgba(251,191,36,0.6)]' : color;
    const finalSize = isPortal ? 'w-12 h-12' : size;

    return (
        <div
            className="absolute"
            style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <motion.div
                layoutId={id}
                className={`cursor-pointer rounded-full flex items-center justify-center ${finalColor} ${finalSize} ${!isPortal && 'shadow-lg shadow-white/30'}`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClick}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                {/* Inner core for portals to make it look like a cluster */}
                {isPortal && shouldAnimate && (
                    <motion.div
                        className="w-full h-full rounded-full bg-amber-400 blur-md opacity-50"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                )}
            </motion.div>

            {/* Label - Always visible beneath star */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-2 py-1 bg-space-900/60 backdrop-blur-sm rounded text-xs text-star-100 whitespace-nowrap drop-shadow-lg pointer-events-none">
                {label}
            </div>
        </div>
    );
};

export default GalaxyNode;
