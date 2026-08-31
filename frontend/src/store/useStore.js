import { create } from 'zustand';

export const useStore = create((set) => ({
    viewMode: 'galaxy', // 'list' | 'galaxy'
    isMobile: false, // defined as width < 1280px
    prefersReducedMotion: false, // defined by media query

    activeProjectId: null, // string | null — the ID of the currently expanded project
    activePublicationId: null, // string | null — the ID of the currently expanded publication
    activeSection: null, // string | null — 'hero' | 'about' | 'resume'
    orbitSystem: 'home', // 'home' | 'projects' | 'publications'

    actions: {
        setActiveProject: (id) => set({
            activeProjectId: id,
            activePublicationId: null,
            activeSection: null,
        }),
        clearActiveProject: () => set({ activeProjectId: null }),

        setActivePublication: (id) => set({
            activePublicationId: id,
            activeProjectId: null,
            activeSection: null,
        }),
        clearActivePublication: () => set({ activePublicationId: null }),

        setActiveSection: (section) => set({
            activeSection: section,
            activeProjectId: null,
            activePublicationId: null,
        }),
        clearActiveSection: () => set({ activeSection: null }),

        clearAllModals: () => set({
            activeProjectId: null,
            activePublicationId: null,
            activeSection: null,
        }),

        setOrbitSystem: (system) => set({
            orbitSystem: system,
            activeProjectId: null,
            activePublicationId: null,
            activeSection: null,
        }),

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
    },
}));

export const useStoreActions = () => useStore((state) => state.actions);
