import GradientText from './GradientText'

const Home = () => {
  return (
    <div className="text-white pt-10">
      <h1 className="text-3xl font-bold">About Page</h1>
      <GradientText
        colors={["#5227FF","#FF9FFC","#B19EEF"]}
        animationSpeed={8}
        showBorder={false}
        className="custom-class"
        >
        Hi, I'm Jeffery
        </GradientText>
    </div>
  );
};
export default Home;