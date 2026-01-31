import { motion } from 'framer-motion';
import star1 from '../../assets/star1.webp';
import star2 from '../../assets/star2.webp';
import starCluster from '../../assets/starcluster.webp';

const GalaxyNode = ({ id, label, x, y, type = 'node', onClick, shouldAnimate = true }) => {

    let starImage = star1;
    let sizeClass = "w-24 h-24";
    if (type === 'portal') {
        starImage = starCluster;
        sizeClass = "w-24 h-24";
    } else if (type === 'project') {
        starImage = star2;
        sizeClass = "w-12 h-12";
    }

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
                className={`cursor-pointer flex items-center justify-center ${sizeClass}`}
                whileTap={{ scale: 0.9 }}
                onClick={onClick}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <img
                    src={starImage}
                    alt={label}
                    className="w-full h-full object-contain mix-blend-screen"
                    style={{ filter: 'brightness(1.5) contrast(1.2)' }} // Optional boost to make them pop against space
                />
            </motion.div>

            {/* Label - Always visible beneath star */}
            <div
                className="absolute top-full left-1/2 mt-3 px-2 py-1 bg-space-900/60 backdrop-blur-sm rounded text-xs text-star-100 whitespace-nowrap drop-shadow-lg pointer-events-none border border-space-700/50"
                style={{ transform: 'translateX(-50%) translateZ(0)' }}
            >
                {label}
            </div>
        </div>
    );
};

export default GalaxyNode;
