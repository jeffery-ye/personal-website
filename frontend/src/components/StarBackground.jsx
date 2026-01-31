import spaceBg from '../assets/image_assets/space-bg.webp';

const StarBackground = ({ className = "fixed" }) => {
  return (
    <div className={`${className} inset-0 z-0 pointer-events-none overflow-hidden bg-space-950`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${spaceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
};

export default StarBackground;