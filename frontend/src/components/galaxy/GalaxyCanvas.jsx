import { motion } from 'framer-motion';
import { useStoreActions } from '../../store/useStore';
import { content } from '../../data/content';
import { polarToCartesian, getProjectPosition } from '../../utils/math';
import GalaxyNode from './GalaxyNode';
import OrbitRings from './OrbitRings';
import ActiveProjectOverlay from './ActiveProjectOverlay';

const GalaxyCanvas = () => {
    const { setActiveProject } = useStoreActions();

    // Calculate drag constraints (slightly larger than outermost orbit)
    const maxDrag = 700;

    // Calculate positions for all nodes
    const heroPos = polarToCartesian(content.hero.coords.r, content.hero.coords.theta);
    const aboutPos = polarToCartesian(content.about.coords.r, content.about.coords.theta);
    const projectsClusterPos = polarToCartesian(content.projects.coords.r, content.projects.coords.theta);
    const resumePos = polarToCartesian(content.resume.coords.r, content.resume.coords.theta);

    // Calculate individual project positions (relative to projects cluster)
    const projectPositions = content.projects.data.map((project) => ({
        ...project,
        position: getProjectPosition(content.projects.coords, project.coords),
    }));

    return (
        <div className="fixed inset-0 top-16 overflow-hidden bg-space-950">
            {/* Draggable Canvas */}
            <motion.div
                drag
                dragConstraints={{
                    left: -maxDrag,
                    right: maxDrag,
                    top: -maxDrag,
                    bottom: maxDrag,
                }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                style={{ width: '200%', height: '200%', left: '-50%', top: '-50%' }}
            >
                {/* Orbit Rings */}
                <OrbitRings radii={[150, 400]} />

                {/* Center Node (Hero/Home) */}
                <GalaxyNode
                    id="node-hero"
                    label="Home"
                    x={heroPos.x}
                    y={heroPos.y}
                    color="bg-nebula-cyan"
                    size="w-6 h-6"
                    onClick={() => console.log('Navigate to Home')}
                />

                {/* About Node */}
                <GalaxyNode
                    id="node-about"
                    label="About Me"
                    x={aboutPos.x}
                    y={aboutPos.y}
                    color="bg-nebula-purple"
                    size="w-5 h-5"
                    onClick={() => console.log('Navigate to About')}
                />

                {/* Projects Cluster Label */}
                <GalaxyNode
                    id="node-projects-cluster"
                    label="Projects"
                    x={projectsClusterPos.x}
                    y={projectsClusterPos.y}
                    color="bg-yellow-400"
                    size="w-5 h-5"
                    onClick={() => console.log('Navigate to Projects')}
                />

                {/* Individual Project Nodes */}
                {projectPositions.map((project) => (
                    <GalaxyNode
                        key={project.id}
                        id={`project-${project.id}`}
                        label={project.title}
                        x={project.position.x}
                        y={project.position.y}
                        color="bg-white"
                        size="w-3 h-3"
                        onClick={() => setActiveProject(project.id)}
                    />
                ))}

                {/* Resume Node */}
                <GalaxyNode
                    id="node-resume"
                    label="Resume"
                    x={resumePos.x}
                    y={resumePos.y}
                    color="bg-green-400"
                    size="w-5 h-5"
                    onClick={() => console.log('Navigate to Resume')}
                />
            </motion.div>

            {/* Overlay for expanded project */}
            <ActiveProjectOverlay />
        </div>
    );
};

export default GalaxyCanvas;
