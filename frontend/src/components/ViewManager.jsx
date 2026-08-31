import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore, useStoreActions } from '../store/useStore';
import Navbar from './Navbar';
import GalaxyCanvas from './galaxy/GalaxyCanvas';

const ViewManager = ({ children }) => {
    const viewMode = useStore((state) => state.viewMode);
    const isMobile = useStore((state) => state.isMobile);
    const orbitSystem = useStore((state) => state.orbitSystem);
    const { setOrbitSystem, setActiveSection } = useStoreActions();
    const location = useLocation();

    // Synchronize Galaxy canvas state with browser URL
    useEffect(() => {
        if (viewMode !== 'galaxy' || isMobile) return;

        switch (location.pathname) {
            case '/projects':
                setOrbitSystem('projects');
                break;
            case '/publications':
                setOrbitSystem('publications');
                break;
            case '/about':
                setOrbitSystem('home');
                setActiveSection('about');
                break;
            case '/resume':
                setOrbitSystem('home');
                setActiveSection('resume');
                break;
            case '/':
            default:
                if (orbitSystem !== 'home') {
                    setOrbitSystem('home');
                }
                break;
        }
    }, [location.pathname, viewMode, isMobile, orbitSystem, setActiveSection, setOrbitSystem]);

    return (
        <>
            <Navbar />
            {viewMode === 'galaxy' && !isMobile ? (
                <main aria-label="Interactive Galaxy Canvas">
                    <GalaxyCanvas />
                </main>
            ) : (
                <>
                    {children}
                </>
            )}
        </>
    );
};

export default ViewManager;
