import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useStore, useStoreActions } from '../../store/useStore';

const ClusterNavigation = () => {
    const orbitSystem = useStore((state) => state.orbitSystem);
    const { setOrbitSystem } = useStoreActions();

    if (orbitSystem === 'home') return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-8 z-50"
        >
            <button
                onClick={() => setOrbitSystem('home')}
                className="flex items-center gap-2 group text-nebula-cyan hover:text-white transition-colors"
                aria-label="Back to Universe"
            >
                <div className="p-2 rounded-full bg-space-900 border border-space-700 group-hover:border-nebula-cyan transition-colors">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-mono text-sm tracking-wider uppercase">Return to Universe</span>
            </button>
        </motion.div>
    );
};

export default ClusterNavigation;
