import { useId } from 'react';
import blackholeImg from '../../assets/blackhole.webp';

const StarIcon = ({
    variant = 'default', // 'default' | 'portal' | 'project' | 'blackhole'
    size = 48,
    color = '#22D3EE', // nebula-cyan
    secondaryColor = '#A855F7' // nebula-purple
}) => {
    const rawId = useId();
    const id = rawId.replace(/:/g, '');

    // 4-point star with radial gradient (white center → colored edges)
    if (variant === 'default') {
        const glowId = `star-glow-${id}`;
        const radialId = `star-radial-${id}`;

        return (
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id={radialId} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="20%" stopColor="white" />
                        <stop offset="60%" stopColor={color} />
                        <stop offset="100%" stopColor={secondaryColor} />
                    </radialGradient>
                </defs>
                <path
                    d="M50 0 L62 38 L100 50 L62 62 L50 100 L38 62 L0 50 L38 38 Z"
                    fill={`url(#${radialId})`}
                    filter={`url(#${glowId})`}
                />
            </svg>
        );
    }

    // Smaller 4-point star for project nodes
    if (variant === 'project') {
        const glowId = `project-glow-${id}`;
        const radialId = `project-radial-${id}`;

        return (
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id={radialId} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="20%" stopColor="white" />
                        <stop offset="60%" stopColor="#2be6ffff" />
                        <stop offset="100%" stopColor="#2be6ffff" />
                    </radialGradient>
                </defs>
                <path
                    d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z"
                    fill={`url(#${radialId})`}
                    filter={`url(#${glowId})`}
                />
            </svg>
        );
    }

    // 3-star cluster for portal nodes
    if (variant === 'portal') {
        const glowId = `cluster-glow-${id}`;
        const mainId = `cluster-main-${id}`;
        const secId = `cluster-secondary-${id}`;
        const tertId = `cluster-tertiary-${id}`;

        return (
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id={mainId} cx="50%" cy="50%" r="50%">
                        <stop offset="15%" stopColor="white" />
                        <stop offset="55%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor={secondaryColor} />
                    </radialGradient>
                    <radialGradient id={secId} cx="50%" cy="50%" r="50%">
                        <stop offset="15%" stopColor="white" />
                        <stop offset="55%" stopColor={color} />
                        <stop offset="100%" stopColor="#0EA5E9" />
                    </radialGradient>
                    <radialGradient id={tertId} cx="50%" cy="50%" r="50%">
                        <stop offset="15%" stopColor="white" />
                        <stop offset="55%" stopColor={secondaryColor} />
                        <stop offset="100%" stopColor="#7C3AED" />
                    </radialGradient>
                </defs>

                <g filter={`url(#${glowId})`}>
                    <path
                        d="M60 20 L67 43 L90 50 L67 57 L60 80 L53 57 L30 50 L53 43 Z"
                        fill={`url(#${mainId})`}
                    />
                </g>

                <g filter={`url(#${glowId})`}>
                    <path
                        d="M28 11 L33 26 L48 31 L33 36 L28 51 L23 36 L8 31 L23 26 Z"
                        fill={`url(#${secId})`}
                    />
                </g>

                <g filter={`url(#${glowId})`}>
                    <path
                        d="M35 58 L39 69 L50 73 L39 77 L35 88 L31 77 L20 73 L31 69 Z"
                        fill={`url(#${tertId})`}
                    />
                </g>
            </svg>
        );
    }

    // Black Hole variant (Image)
    if (variant === 'blackhole') {
        return (
            <img
                src={blackholeImg}
                alt="Black Hole"
                width={size}
                height={size}
                className="select-none pointer-events-none"
                style={{ filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.4))' }}
            />
        );
    }

    return null;
};

export default StarIcon;
