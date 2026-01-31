import { motion, AnimatePresence } from 'framer-motion';
import { useStore, useStoreActions } from '../../store/useStore';
import { content } from '../../data/content';
import GalaxyNode from './GalaxyNode';
import ConstellationLines from './ConstellationLines';
import ActiveProjectOverlay from './ActiveProjectOverlay';
import ClusterNavigation from './ClusterNavigation';

const GalaxyCanvas = () => {
    const orbitSystem = useStore((state) => state.orbitSystem);
    const { setActiveProject, setOrbitSystem } = useStoreActions();

    // Get current system data
    const currentSystem = content.systems[orbitSystem];

    // Determine animation direction logic
    // If we are in 'projects', we arrived via Zoom In. If 'home', we arrived via Zoom Out.
    // This is a simplification; a persistent `prevSystem` would be more robust but this works for 2 systems.
    const isZoomedIn = orbitSystem === 'projects';

    const variants = {
        initial: (isZoomedIn) => ({
            scale: isZoomedIn ? 0.2 : 5,
            opacity: 0,
        }),
        animate: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", duration: 1.2, bounce: 0, delay: 0.1 } // Critically damped spring, slight delay to prevent initial stutter
        },
        exit: (isZoomedIn) => ({
            scale: isZoomedIn ? 5 : 0.2,
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
        })
    };

    // Calculate drag constraints
    const maxDrag = 1000;

    // Portal position for transform origin (Home system)
    const portalNode = content['projects-portal'];
    const transformOrigin = portalNode
        ? `calc(50% + ${portalNode.x}px) calc(50% + ${portalNode.y}px)`
        : 'center center';

    return (
        <div className="fixed inset-0 top-16 overflow-hidden bg-space-950" >
            {/* Navigation UI */}
            < ClusterNavigation />

            {/* Draggable Canvas */}
            < motion.div
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                drag
                dragConstraints={{
                    left: - maxDrag, right: maxDrag, top: -maxDrag, bottom: maxDrag
                }}
                dragElastic={0.1}
                style={{ width: '200%', height: '200%', left: '-50%', top: '-50%' }}
            >
                <AnimatePresence mode="wait" custom={isZoomedIn}>
                    <motion.div
                        key={orbitSystem}
                        custom={isZoomedIn}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 w-full h-full"
                        style={{ transformOrigin }} // Dynamic origin based on portal location
                    >
                        {/* Constellation Lines */}
                        <ConstellationLines
                            content={content}
                            connections={currentSystem.connections}
                        />

                        {/* Render Nodes */}
                        {currentSystem.nodes.map((node) => {
                            const nodeData = content[node.id];
                            if (!nodeData) return null;

                            return (
                                <GalaxyNode
                                    key={node.id}
                                    id={node.id}
                                    label={nodeData.label || nodeData.title || nodeData.data?.title}
                                    x={nodeData.x}
                                    y={nodeData.y}
                                    type={node.type}
                                    color={node.id === 'home' ? 'bg-nebula-cyan' : node.id === 'about' ? 'bg-nebula-purple' : 'bg-white'}
                                    // Portal Handling
                                    onClick={() => {
                                        if (node.type === 'portal') {
                                            setOrbitSystem(node.target);
                                        } else if (node.type === 'project') {
                                            setActiveProject(node.data.id);
                                        }
                                    }}
                                />
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </motion.div >

            {/* Overlay for expanded project */}
            < ActiveProjectOverlay />
        </div >
    );
};

export default GalaxyCanvas;
