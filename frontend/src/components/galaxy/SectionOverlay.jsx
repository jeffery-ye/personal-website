import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useStore, useStoreActions } from '../../store/useStore';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Resume from '../../pages/Resume';

const SectionOverlay = () => {
    const activeSection = useStore((state) => state.activeSection);
    const { clearActiveSection } = useStoreActions();

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                clearActiveSection();
            }
        };

        if (activeSection) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [activeSection, clearActiveSection]);

    // Renders content based on the active section
    const renderContent = () => {
        switch (activeSection) {
            case 'hero': // Home 
                return <Home />;

            case 'about':
                return <About />;

            case 'resume':
                return <Resume />;

            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            {activeSection && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={clearActiveSection}
                        className="fixed inset-0 bg-space-950/60 z-40"
                    />

                    {/* Content Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: '-50%' }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: '-50%' }}
                        transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                        className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl overflow-y-auto overflow-x-hidden custom-scrollbar bg-space-950/80 border-x border-white/10 shadow-2xl shadow-black/50 will-change-transform"
                    >
                        {/* Close Button - Fixed to viewport corner for reliability */}
                        <button
                            onClick={clearActiveSection}
                            className="fixed top-24 right-6 md:right-10 z-[60] p-3 text-slate-400 hover:text-white transition-colors bg-space-800/80 rounded-full hover:bg-space-700 backdrop-blur-md border border-white/10 shadow-lg"
                        >
                            <X size={24} />
                        </button>

                        {/* Content Container */}
                        <div className="p-8 md:p-12 min-h-full">
                            {renderContent()}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SectionOverlay;
