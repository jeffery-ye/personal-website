import { motion } from 'framer-motion';
import { useState } from 'react';

const GalaxyNode = ({ id, label, x, y, color = 'bg-white', size = 'w-4 h-4', onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

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
                className={`cursor-pointer ${size} ${color} rounded-full shadow-lg shadow-white/30`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={onClick}
            >
                {/* Label on hover */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-space-900/90 backdrop-blur-sm rounded text-xs text-star-100 whitespace-nowrap drop-shadow-lg"
                    >
                        {label}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default GalaxyNode;
