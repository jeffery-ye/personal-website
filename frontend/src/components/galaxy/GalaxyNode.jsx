import { motion } from 'framer-motion';
import StarIcon from './StarIcon';

const GalaxyNode = ({ label, x, y, type = 'node', onClick }) => {
    // Map node types to StarIcon variants and sizes
    const getStarConfig = () => {
        switch (type) {
            case 'portal':
                return { variant: 'portal', size: 70 };
            case 'project':
                return { variant: 'project', size: 40 };
            case 'publication':
                return { variant: 'default', size: 45, color: '#ef4444', secondaryColor: '#dc2626' }; // single star, bright red
            case 'blackhole':
                return { variant: 'blackhole', size: 100 };
            default:
                return { variant: 'default', size: 45 };
        }
    };

    const { variant, size, color, secondaryColor } = getStarConfig();
    const isPublication = type === 'publication';

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
                role="button"
                tabIndex={0}
                aria-label={label}
                className="cursor-pointer flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-space-950"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClick}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onClick?.();
                    }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <StarIcon variant={variant} size={size} color={color} secondaryColor={secondaryColor} />
            </motion.div>

            {/* Label - Always visible beneath star */}
            <div
                className={`absolute top-full left-1/2 mt-2 px-2 py-0.5 bg-space-950 rounded-none font-mono text-star-100 w-max whitespace-normal text-center leading-tight pointer-events-none border-2 border-nebula-cyan shadow-[3px_3px_0px_0px_#083344] ${
                    isPublication
                        ? 'max-w-[38ch] text-[10px]'
                        : 'max-w-[16ch] text-[10px]'
                }`}
                style={{ transform: 'translateX(-50%) translateZ(0)', willChange: 'transform' }}
            >
                {label}
            </div>
        </div>
    );
};

export default GalaxyNode;
