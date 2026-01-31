import { create } from 'zustand';

export const useStore = create((set) => ({
    viewMode: 'list', // 'list' | 'galaxy'
    isMobile: false, // defined as width < 768px
    prefersReducedMotion: false, // defined by media query
    camera: { x: 0, y: 0, zoom: 1 }, // intended for future use

    activeProjectId: null, // string | null — the ID of the currently expanded project

    actions: {
        setActiveProject: (id) => set({ activeProjectId: id }),
        clearActiveProject: () => set({ activeProjectId: null }),

        toggleViewMode: () => set((state) => {
            if (state.isMobile || state.prefersReducedMotion) {
                return { viewMode: 'list' };
            }
            return { viewMode: state.viewMode === 'list' ? 'galaxy' : 'list' };
        }),

        setDeviceCapabilities: (isMobile, prefersReducedMotion) => set(() => {
            // If switching to mobile OR reduced motion, force list view
            const updates = { isMobile, prefersReducedMotion };
            if (isMobile || prefersReducedMotion) {
                updates.viewMode = 'list';
            }
            return updates;
        }),

        setCamera: (camera) => set((state) => ({ camera: { ...state.camera, ...camera } })),
    },
}));

export const useStoreActions = () => useStore((state) => state.actions);
