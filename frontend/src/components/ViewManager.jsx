import { useStore } from '../store/useStore';
import Navbar from './Navbar';

const ViewManager = ({ children }) => {
    const { viewMode, isMobile } = useStore();

    return (
        <>
            <Navbar />
            {viewMode === 'galaxy' && !isMobile ? (
                <div className="galaxy-container flex items-center justify-center h-[calc(100vh-64px)] text-2xl text-nebula-cyan font-bold relative z-10 drop-shadow-lg">
                    Galaxy View Coming Soon
                </div>
            ) : (
                children
            )}
        </>
    );
};

export default ViewManager;
