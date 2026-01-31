import { useMemo } from 'react';
import spaceBg from '../assets/space-bg.jpg';

const StarBackground = ({ className = "fixed" }) => {
  const generateStars = (count) => {
    let shadowString = '';
    const colors = ['#F1F5F9', '#22D3EE', '#A855F7'];

    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      const color = colors[Math.floor(Math.random() * colors.length)];

      shadowString += `${x}px ${y}px ${color}${i < count - 1 ? ',' : ''}`;
    }
    return shadowString;
  };

  const smallStars = useMemo(() => generateStars(700), []);
  const mediumStars = useMemo(() => generateStars(200), []);

  return (
    <div className={`${className} inset-0 z-0 pointer-events-none overflow-hidden bg-space-950`}>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${spaceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div
        className="absolute w-[1px] h-[1px] bg-transparent rounded-full opacity-60"
        style={{ boxShadow: smallStars }}
      />
      <div
        className="absolute w-[2px] h-[2px] bg-transparent rounded-full opacity-90"
        style={{ boxShadow: mediumStars }}
      />

    </div>
  );
};

export default StarBackground;