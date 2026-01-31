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
                    {/* Backdrop - Removed blur for performance */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-40"
                        onClick={clearActiveProject}
                    />

                    {/* Card Container - Zoom in animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
                        transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                        className="fixed top-1/2 left-1/2 z-50 w-full max-w-lg bg-space-900 rounded-xl shadow-2xl shadow-nebula-cyan/20 border border-space-700"
                    >
                        {/* Close Button */}
                        <button
                            onClick={clearActiveProject}
                            className="absolute -top-12 right-0 p-2 text-star-400 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>

                        <ProjectCard project={activeProject} />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ActiveProjectOverlay;
