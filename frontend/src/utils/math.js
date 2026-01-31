/**
 * Converts polar coordinates to Cartesian coordinates.
 * @param {number} r - Radius in pixels (distance from origin).
 * @param {number} theta - Angle in RADIANS (not degrees).
 * @returns {{ x: number, y: number }} Cartesian coordinates.
 */
export const polarToCartesian = (r, theta) => ({
    x: r * Math.cos(theta),
    y: r * Math.sin(theta),
});

/**
 * Calculates the absolute position of a project node.
 * Projects orbit around their parent cluster, so we need to add
 * the cluster's position to the project's relative position.
 * @param {object} clusterCoords - { r, theta } of the parent cluster.
 * @param {object} projectCoords - { r, theta } of the project relative to cluster.
 * @returns {{ x: number, y: number }} Absolute Cartesian coordinates.
 */
export const getProjectPosition = (clusterCoords, projectCoords) => {
    const clusterPos = polarToCartesian(clusterCoords.r, clusterCoords.theta);
    const projectRelativePos = polarToCartesian(projectCoords.r, projectCoords.theta);
    return {
        x: clusterPos.x + projectRelativePos.x,
        y: clusterPos.y + projectRelativePos.y,
    };
};
