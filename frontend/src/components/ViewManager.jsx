import { useStore } from '../store/useStore';
import Navbar from './Navbar';
import GalaxyCanvas from './galaxy/GalaxyCanvas';
import StarBackground from './StarBackground';

const ViewManager = ({ children }) => {
    const { viewMode, isMobile } = useStore();

    return (
        <>
            <Navbar />
            {viewMode === 'galaxy' && !isMobile ? (
                <GalaxyCanvas />
            ) : (
                <>
                    <StarBackground />
                    {children}
                </>
            )}
        </>
    );
};

export default ViewManager;
