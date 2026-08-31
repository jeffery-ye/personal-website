import { useEffect } from 'react';
import { useStoreActions } from '../store/useStore';

export const useHardwareCheck = () => {
    const { setDeviceCapabilities } = useStoreActions();

    useEffect(() => {
        let timeoutId;

        const checkCapabilities = () => {
            const isMobile = window.innerWidth < 1280;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            setDeviceCapabilities(isMobile, prefersReducedMotion);
        };

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkCapabilities, 150);
        };

        const handleMotionChange = (e) => {
            const isMobile = window.innerWidth < 1280;
            setDeviceCapabilities(isMobile, e.matches);
        };

        // Initial check
        checkCapabilities();

        // Listeners
        window.addEventListener('resize', handleResize);
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        // Modern browsers use addEventListener for MediaQueryList, older use addListener (but we target modern here)
        // standardized way:
        motionQuery.addEventListener('change', handleMotionChange);

        return () => {
            window.removeEventListener('resize', handleResize);
            motionQuery.removeEventListener('change', handleMotionChange);
            clearTimeout(timeoutId);
        };
    }, [setDeviceCapabilities]);
};
