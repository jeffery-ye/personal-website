import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useStore, useStoreActions } from '../../store/useStore';
import ProjectCard from '../ProjectCard';
import { content } from '../../data/content';

const ActiveProjectOverlay = () => {
    const activeProjectId = useStore((state) => state.activeProjectId);
    const { clearActiveProject } = useStoreActions();

    // Find the active project data
    const activeProject = activeProjectId
        ? content.projects.data.find((p) => p.id === activeProjectId)
        : null;

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                clearActiveProject();
            }
        };

        if (activeProjectId) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [activeProjectId, clearActiveProject]);

    return (
        <AnimatePresence>
            {activeProject && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                        onClick={clearActiveProject}
                    />

                    {/* Card Container */}
                    <motion.div
                        layoutId={`project-${activeProject.id}`}
                        className="fixed top-1/2 left-1/2 z-50 w-full max-w-lg bg-space-900 rounded-xl"
                        style={{ x: '-50%', y: '-50%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        {/* Content Wrapper - Fades in to avoid layout thrashing of inner elements */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={clearActiveProject}
                                className="absolute -top-12 right-0 p-2 text-star-400 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>

                            {/* Reuse existing ProjectCard - Remove outer border/bg as container handles it */}
                            <ProjectCard project={activeProject} />
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ActiveProjectOverlay;
