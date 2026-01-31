import { motion } from 'framer-motion';
import StarIcon from './StarIcon';

const GalaxyNode = ({ id, label, x, y, type = 'node', onClick }) => {
    // Map node types to StarIcon variants and sizes
    const getStarConfig = () => {
        switch (type) {
            case 'portal':
                return { variant: 'portal', size: 70 };
            case 'project':
                return { variant: 'project', size: 40 };
            case 'blackhole':
                return { variant: 'blackhole', size: 100 };
            default:
                return { variant: 'default', size: 45 };
        }
    };

    const { variant, size } = getStarConfig();

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
                className="cursor-pointer flex items-center justify-center"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClick}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <StarIcon variant={variant} size={size} />
            </motion.div>

            {/* Label - Always visible beneath star */}
            <div
                className="absolute top-full left-1/2 mt-3 px-2 py-1 bg-space-900/90 rounded text-xs text-star-100 whitespace-nowrap drop-shadow-lg pointer-events-none border border-space-700/50"
                style={{ transform: 'translateX(-50%) translateZ(0)', willChange: 'transform' }}
            >
                {label}
            </div>
        </div>
    );
};

export default GalaxyNode;
