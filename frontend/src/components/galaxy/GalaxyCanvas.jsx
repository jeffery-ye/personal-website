import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore, useStoreActions } from '../../store/useStore';

import GalaxyNode from './GalaxyNode';
import ConstellationLines from './ConstellationLines';
import ClusterNavigation from './ClusterNavigation';
import SectionOverlay from './SectionOverlay';
import ActiveProjectOverlay from './ActiveProjectOverlay';
import GalaxyBackground from './GalaxyBackground';
import { content } from '../../data/content';
import nebulaBg from '../../assets/nebula-bg.webp';
import star1 from '../../assets/star1.webp';
import star2 from '../../assets/star2.webp';
import starCluster from '../../assets/starcluster.webp';

const GalaxyCanvas = () => {
    const orbitSystem = useStore((state) => state.orbitSystem);
    const activeProjectId = useStore((state) => state.activeProjectId);
    const activeSection = useStore((state) => state.activeSection);
    const { setActiveProject, setOrbitSystem, setActiveSection } = useStoreActions();

    // Preload Nebula Image
    useEffect(() => {
        const imagesToPreload = [nebulaBg, star1, star2, starCluster];
        imagesToPreload.forEach(async (src) => {
            const img = new Image();
            img.src = src;
            try {
                await img.decode();
            } catch (e) {
                console.warn("Failed to decode image", src);
            }
        });
    }, []);

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
    const maxDrag = 400;

    // Portal position for transform origin (Home system)
    const portalNode = content['projects-portal'];
    const transformOrigin = portalNode
        ? `calc(50% + ${portalNode.x}px) calc(50% + ${portalNode.y}px)`
        : 'center center';

    return (
        <div className="fixed inset-0 top-16 overflow-hidden" >
            <GalaxyBackground />
            {/* Navigation UI */}
            < ClusterNavigation />
            <SectionOverlay />

            {/* Draggable Canvas - Disable interaction when overlay is open */}
            <motion.div
                className={`absolute cursor-grab active:cursor-grabbing ${activeSection || activeProjectId ? 'pointer-events-none' : ''}`}
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

                        {/* Nebula Background - Attached to System Space */}
                        {orbitSystem === 'projects' && (
                            <div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 opacity-80 pointer-events-none"
                                style={{
                                    backgroundImage: `url(${nebulaBg})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                        )}

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
                                    // Portal Handling
                                    onClick={() => {
                                        if (node.type === 'portal') {
                                            setOrbitSystem(node.target);
                                        } else if (node.type === 'project') {
                                            setActiveProject(node.data.id);
                                        } else {
                                            setActiveSection(node.id);
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
