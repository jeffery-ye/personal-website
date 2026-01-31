const StarIcon = ({
    variant = 'default', // 'default' | 'portal' | 'project'
    size = 48,
    color = '#22D3EE', // nebula-cyan
    secondaryColor = '#A855F7' // nebula-purple
}) => {
    // 4-point star with elongated spokes (default nodes like Home, About, Resume)
    if (variant === 'default') {
        return (
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="star-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={color} />
                        <stop offset="100%" stopColor={secondaryColor} />
                    </linearGradient>
                </defs>
                <path
                    d="M50 5 L54 42 L95 50 L54 58 L50 95 L46 58 L5 50 L46 42 Z"
                    fill="url(#star-gradient)"
                    filter="url(#star-glow)"
                />
                <circle cx="50" cy="50" r="8" fill="white" opacity="0.9" />
            </svg>
        );
    }

    // Smaller 4-point star for project nodes
    if (variant === 'project') {
        return (
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="project-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <path
                    d="M50 10 L53 43 L90 50 L53 57 L50 90 L47 57 L10 50 L47 43 Z"
                    fill={secondaryColor}
                    filter="url(#project-glow)"
                />
                <circle cx="50" cy="50" r="6" fill="white" opacity="0.8" />
            </svg>
        );
    }

    // 3-star cluster for portal nodes (Projects portal)
    if (variant === 'portal') {
        return (
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="cluster-glow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="cluster-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={color} />
                        <stop offset="50%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor={secondaryColor} />
                    </linearGradient>
                </defs>

                {/* Main large star (center-right) */}
                <g filter="url(#cluster-glow)">
                    <path
                        d="M60 25 L63 45 L85 50 L63 55 L60 75 L57 55 L35 50 L57 45 Z"
                        fill="url(#cluster-gradient)"
                    />
                    <circle cx="60" cy="50" r="5" fill="white" opacity="0.9" />
                </g>

                {/* Secondary star (top-left) */}
                <g filter="url(#cluster-glow)">
                    <path
                        d="M30 15 L32 28 L46 32 L32 36 L30 50 L28 36 L14 32 L28 28 Z"
                        fill={color}
                    />
                    <circle cx="30" cy="32" r="3" fill="white" opacity="0.8" />
                </g>

                {/* Tertiary star (bottom-left) */}
                <g filter="url(#cluster-glow)">
                    <path
                        d="M35 60 L37 70 L48 73 L37 76 L35 87 L33 76 L22 73 L33 70 Z"
                        fill={secondaryColor}
                    />
                    <circle cx="35" cy="73" r="2.5" fill="white" opacity="0.7" />
                </g>
            </svg>
        );
    }

    return null;
};

export default StarIcon;
