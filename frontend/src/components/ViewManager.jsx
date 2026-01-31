import { useStore } from '../store/useStore';
import Navbar from './Navbar';
import GalaxyCanvas from './galaxy/GalaxyCanvas';

const ViewManager = ({ children }) => {
    const { viewMode, isMobile } = useStore();

    return (
        <>
            <Navbar />
            {viewMode === 'galaxy' && !isMobile ? (
                <GalaxyCanvas />
            ) : (
                children
            )}
        </>
    );
};

export default ViewManager;
