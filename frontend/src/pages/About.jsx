import GradientText from '../components/GradientText'

const Home = () => {
  return (
    <div className="text-white pt-10">
      <GradientText
        colors={["#26efff","#921aff","#fa2bff"]}
        animationSpeed={3}
        showBorder={false}
        yoyo={false}
        className="text-4xl md:text-6xl font-bold leading-tight" 
        >
        About Me
        </GradientText>
    </div>
  );
};
export default Home;