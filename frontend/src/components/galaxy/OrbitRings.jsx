const OrbitRings = ({ radii = [400, 150] }) => {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible' }}
        >
            <g style={{ transform: 'translate(50%, 50%)' }}>
                {radii.map((radius, index) => (
                    <circle
                        key={index}
                        cx="0"
                        cy="0"
                        r={radius}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                    />
                ))}
            </g>
        </svg>
    );
};

export default OrbitRings;
