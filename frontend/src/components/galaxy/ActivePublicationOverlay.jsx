import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useStore, useStoreActions } from '../../store/useStore';
import PublicationCard from '../PublicationCard';
import { content } from '../../data/content.jsx';

const ActivePublicationOverlay = () => {
    const activePublicationId = useStore((state) => state.activePublicationId);
    const { clearActivePublication } = useStoreActions();

    // Find the active publication data
    const activePublication = activePublicationId
        ? content[`publication-${activePublicationId}`]
        : null;

    // Close on Escape key & Lock body scroll
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                clearActivePublication();
            }
        };

        if (activePublicationId) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [activePublicationId, clearActivePublication]);

    return (
        <AnimatePresence>
            {activePublication && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-40"
                        onClick={clearActivePublication}
                    />

                    {/* Card Container - Zoom in animation */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Publication Details"
                        initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
                        transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                        className="fixed top-1/2 left-1/2 z-50 w-full max-w-4xl bg-space-900 rounded-xl shadow-2xl shadow-red-500/20 border border-space-700"
                    >
                        {/* Close Button */}
                        <button
                            onClick={clearActivePublication}
                            className="absolute -top-12 right-0 p-2 text-star-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nebula-cyan rounded-md"
                            aria-label="Close dialog"
                        >
                            <X size={24} />
                        </button>

                        <PublicationCard publication={activePublication} />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ActivePublicationOverlay;
