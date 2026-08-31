import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useStore, useStoreActions } from '../../store/useStore';
import ProjectCard from '../ProjectCard';
import { content } from '../../data/content.jsx';

const ActiveProjectOverlay = () => {
    const activeProjectId = useStore((state) => state.activeProjectId);
    const { clearActiveProject } = useStoreActions();

    // Find the active project data
    // In the new content structure, projects are top-level keys like 'project-1'
    const activeProject = activeProjectId
        ? content[`project-${activeProjectId}`]
        : null;

    // Close on Escape key & Lock body scroll
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                clearActiveProject();
            }
        };

        if (activeProjectId) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleKeyDown);
            };
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
                        className="fixed inset-0 bg-black/80 z-40"
                        onClick={clearActiveProject}
                    />

                    {/* Card Container - Zoom in animation */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Project Details"
                        initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
                        transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                        className="fixed top-1/2 left-1/2 z-50 w-full max-w-lg bg-space-900 rounded-xl shadow-2xl shadow-nebula-cyan/20 border border-space-700"
                    >
                        {/* Close Button */}
                        <button
                            onClick={clearActiveProject}
                            className="absolute -top-12 right-0 p-2 text-star-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula-cyan rounded-md"
                            aria-label="Close dialog"
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
