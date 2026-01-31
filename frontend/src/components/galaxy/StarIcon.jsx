const StarIcon = ({
    variant = 'default', // 'default' | 'portal' | 'project'
    size = 48,
    color = '#22D3EE', // nebula-cyan
    secondaryColor = '#A855F7' // nebula-purple
}) => {
    // 4-point star with radial gradient (white center → colored edges)
    if (variant === 'default') {
        return (
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="star-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="star-radial" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="20%" stopColor="white" />
                        <stop offset="60%" stopColor={color} />
                        <stop offset="100%" stopColor={secondaryColor} />
                    </radialGradient>
                </defs>
                <path
                    d="M50 0 L62 38 L100 50 L62 62 L50 100 L38 62 L0 50 L38 38 Z"
                    fill="url(#star-radial)"
                    filter="url(#star-glow)"
                />
            </svg>
        );
    }

    // Smaller 4-point star for project nodes
    if (variant === 'project') {
        return (
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="project-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="project-radial" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="20%" stopColor="white" />
                        <stop offset="60%" stopColor={secondaryColor} />
                        <stop offset="100%" stopColor="#7C3AED" />
                    </radialGradient>
                </defs>
                <path
                    d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z"
                    fill="url(#project-radial)"
                    filter="url(#project-glow)"
                />
            </svg>
        );
    }

    // 3-star cluster for portal nodes
    if (variant === 'portal') {
        return (
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="cluster-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    {/* Each star in cluster gets its own radial gradient centered on itself */}
                    <radialGradient id="cluster-main" cx="50%" cy="50%" r="50%">
                        <stop offset="15%" stopColor="white" />
                        <stop offset="55%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor={secondaryColor} />
                    </radialGradient>
                    <radialGradient id="cluster-secondary" cx="50%" cy="50%" r="50%">
                        <stop offset="15%" stopColor="white" />
                        <stop offset="55%" stopColor={color} />
                        <stop offset="100%" stopColor="#0EA5E9" />
                    </radialGradient>
                    <radialGradient id="cluster-tertiary" cx="50%" cy="50%" r="50%">
                        <stop offset="15%" stopColor="white" />
                        <stop offset="55%" stopColor={secondaryColor} />
                        <stop offset="100%" stopColor="#7C3AED" />
                    </radialGradient>
                </defs>

                {/* Main large star (center-right) */}
                <g filter="url(#cluster-glow)">
                    <path
                        d="M60 20 L67 43 L90 50 L67 57 L60 80 L53 57 L30 50 L53 43 Z"
                        fill="url(#cluster-main)"
                    />
                </g>

                {/* Secondary star (top-left) */}
                <g filter="url(#cluster-glow)">
                    <path
                        d="M28 11 L33 26 L48 31 L33 36 L28 51 L23 36 L8 31 L23 26 Z"
                        fill="url(#cluster-secondary)"
                    />
                </g>

                {/* Tertiary star (bottom-left) */}
                <g filter="url(#cluster-glow)">
                    <path
                        d="M35 58 L39 69 L50 73 L39 77 L35 88 L31 77 L20 73 L31 69 Z"
                        fill="url(#cluster-tertiary)"
                    />
                </g>
            </svg>
        );
    }

    return null;
};

export default StarIcon;
