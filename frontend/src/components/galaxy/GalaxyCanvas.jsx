import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore, useStoreActions } from '../../store/useStore';

import GalaxyNode from './GalaxyNode';
import ConstellationLines from './ConstellationLines';
import ClusterNavigation from './ClusterNavigation';
import SectionOverlay from './SectionOverlay';
import ActiveProjectOverlay from './ActiveProjectOverlay';
import ActivePublicationOverlay from './ActivePublicationOverlay';
import GalaxyBackground from './GalaxyBackground';
import { content } from '../../data/content';
import nebulaBg from '../../assets/image_assets/nebula-bg.webp';
import blackholeImg from '../../assets/blackhole.webp';

const GalaxyCanvas = () => {
    const orbitSystem = useStore((state) => state.orbitSystem);
    const activeProjectId = useStore((state) => state.activeProjectId);
    const activePublicationId = useStore((state) => state.activePublicationId);
    const activeSection = useStore((state) => state.activeSection);
    const { setActiveProject, setActivePublication, setOrbitSystem, setActiveSection } = useStoreActions();

    // Preload Nebula Image
    useEffect(() => {
        const imagesToPreload = [nebulaBg, blackholeImg];
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

    const variants = {
        home: {
            initial: (ctx) => ({ scale: 5, opacity: 0, transformOrigin: ctx.homeOrigin }),
            animate: (ctx) => ({
                scale: 1,
                opacity: 1,
                transformOrigin: ctx.homeOrigin,
                transition: {
                    type: "spring", duration: 1.2, bounce: 0, delay: 0.1,
                    transformOrigin: { duration: 0 }
                }
            }),
            exit: (ctx) => ({
                scale: 5,
                opacity: 0,
                transformOrigin: ctx.homeOrigin,
                transition: {
                    duration: 0.8, ease: "easeInOut",
                    transformOrigin: { duration: 0 }
                }
            })
        },
        projects: {
            initial: (ctx) => ({ scale: 0.2, opacity: 0, transformOrigin: ctx.origins.projects }),
            animate: (ctx) => ({
                scale: 1,
                opacity: 1,
                transformOrigin: ctx.origins.projects,
                transition: {
                    type: "spring", duration: 1.2, bounce: 0, delay: 0.1,
                    transformOrigin: { duration: 0 }
                }
            }),
            exit: (ctx) => ({
                scale: 0.2,
                opacity: 0,
                transformOrigin: ctx.origins.projects,
                transition: {
                    duration: 0.8, ease: "easeInOut",
                    transformOrigin: { duration: 0 }
                }
            })
        },
        publications: {
            initial: (ctx) => ({ scale: 0.2, opacity: 0, transformOrigin: ctx.origins.publications }),
            animate: (ctx) => ({
                scale: 1,
                opacity: 1,
                transformOrigin: ctx.origins.publications,
                transition: {
                    type: "spring", duration: 1.2, bounce: 0, delay: 0.1,
                    transformOrigin: { duration: 0 }
                }
            }),
            exit: (ctx) => ({
                scale: 0.2,
                opacity: 0,
                transformOrigin: ctx.origins.publications,
                transition: {
                    duration: 0.8, ease: "easeInOut",
                    transformOrigin: { duration: 0 }
                }
            })
        }
    };

    // Calculate drag constraints
    const maxDrag = 400;

    // Portal position tracking for isolated transform origins
    const getOrigin = (systemId) => {
        const node = content[`${systemId}-portal`];
        return node ? `calc(50% + ${node.x}px) calc(50% + ${node.y}px)` : 'center center';
    };

    const origins = {
        projects: getOrigin('projects'),
        publications: getOrigin('publications')
    };

    // To tell 'home' where to zoom to/from, we track the 'active' sub-system.
    const lastSubSystemRef = useRef('projects');
    if (orbitSystem !== 'home') {
        lastSubSystemRef.current = orbitSystem;
    }
    const homeOrigin = origins[orbitSystem !== 'home' ? orbitSystem : lastSubSystemRef.current];

    const animationContext = {
        origins,
        homeOrigin
    };

    return (
        <div className="fixed inset-0 top-16 overflow-hidden" >
            <GalaxyBackground />
            {/* Navigation UI */}
            <ClusterNavigation />
            <SectionOverlay />

            {/* Draggable Canvas - Disable interaction when overlay is open */}
            <motion.div
                className={`absolute cursor-grab active:cursor-grabbing ${activeSection || activeProjectId || activePublicationId ? 'pointer-events-none' : ''}`}
                drag
                dragConstraints={{
                    left: - maxDrag, right: maxDrag, top: -maxDrag, bottom: maxDrag
                }}
                dragElastic={0.1}
                style={{ width: '200%', height: '200%', left: '-50%', top: '-50%' }}
            >
                <AnimatePresence mode="wait" custom={animationContext}>
                    <motion.div
                        key={orbitSystem}
                        custom={animationContext}
                        variants={variants[orbitSystem]} // Use specific variants for the current system
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Constellation Lines */}
                        <ConstellationLines
                            content={content}
                            connections={currentSystem.connections}
                        />

                        {/* Nebula Background - Attached to System Space */}
                        {orbitSystem === 'projects' && (
                            <div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-80 pointer-events-none"
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
                                        } else if (node.type === 'publication') {
                                            setActivePublication(node.data.id);
                                        } else {
                                            setActiveSection(node.id);
                                        }
                                    }}
                                />
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Overlay for expanded project/publication */}
            <ActiveProjectOverlay />
            <ActivePublicationOverlay />
        </div>
    );
};

export default GalaxyCanvas;
