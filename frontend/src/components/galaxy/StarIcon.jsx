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
                        <stop offset="0%" stopColor="white" />
                        <stop offset="30%" stopColor={color} />
                        <stop offset="100%" stopColor={secondaryColor} />
                    </radialGradient>
                </defs>
                <path
                    d="M50 0 L58 35 L100 50 L58 65 L50 100 L42 65 L0 50 L42 35 Z"
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
                        <stop offset="0%" stopColor="white" />
                        <stop offset="35%" stopColor={secondaryColor} />
                        <stop offset="100%" stopColor="#7C3AED" />
                    </radialGradient>
                </defs>
                <path
                    d="M50 5 L58 38 L95 50 L58 62 L50 95 L42 62 L5 50 L42 38 Z"
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
                        <stop offset="0%" stopColor="white" />
                        <stop offset="25%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor={secondaryColor} />
                    </radialGradient>
                    <radialGradient id="cluster-secondary" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="30%" stopColor={color} />
                        <stop offset="100%" stopColor="#0EA5E9" />
                    </radialGradient>
                    <radialGradient id="cluster-tertiary" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="30%" stopColor={secondaryColor} />
                        <stop offset="100%" stopColor="#7C3AED" />
                    </radialGradient>
                </defs>

                {/* Main large star (center-right) */}
                <g filter="url(#cluster-glow)">
                    <path
                        d="M60 20 L66 42 L90 50 L66 58 L60 80 L54 58 L30 50 L54 42 Z"
                        fill="url(#cluster-main)"
                    />
                </g>

                {/* Secondary star (top-left) */}
                <g filter="url(#cluster-glow)">
                    <path
                        d="M28 10 L32 25 L48 30 L32 35 L28 52 L24 35 L8 30 L24 25 Z"
                        fill="url(#cluster-secondary)"
                    />
                </g>

                {/* Tertiary star (bottom-left) */}
                <g filter="url(#cluster-glow)">
                    <path
                        d="M35 58 L39 68 L50 72 L39 76 L35 88 L31 76 L20 72 L31 68 Z"
                        fill="url(#cluster-tertiary)"
                    />
                </g>
            </svg>
        );
    }

    return null;
};

export default StarIcon;
