import { motion } from 'framer-motion';

const ConstellationLines = ({ content, connections }) => {
    // Helper to get coordinates for any node ID
    const getCoords = (id) => {
        // Universal lookup since content.js has flat map of all nodes with x/y
        return content[id] ? { x: content[id].x, y: content[id].y } : null;
    };

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <g style={{ transform: 'translate(50%, 50%)' }}>
                {connections.map(([startId, endId], index) => {
                    const start = getCoords(startId);
                    const end = getCoords(endId);

                    if (!start || !end) return null;

                    return (
                        <motion.line
                            key={`${startId}-${endId}`}
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke="rgba(255, 255, 255, 0.15)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeInOut" }}
                        />
                    );
                })}
            </g>
        </svg>
    );
};

export default ConstellationLines;
