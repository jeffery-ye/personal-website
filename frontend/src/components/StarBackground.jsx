import { useMemo } from 'react';

const StarBackground = () => {
  const generateStars = (count) => {
    let shadowString = '';
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000); 
      shadowString += `${x}px ${y}px white${i < count - 1 ? ',' : ''}`;
    }
    return shadowString;
  };

  const smallStars = useMemo(() => generateStars(700), []);
  const mediumStars = useMemo(() => generateStars(200), []);
  const largeStars = useMemo(() => generateStars(100), []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      <div 
        className="absolute w-[1px] h-[1px] bg-transparent rounded-full opacity-40"
        style={{ boxShadow: smallStars }} 
      />

      <div 
        className="absolute w-[2px] h-[2px] bg-transparent rounded-full opacity-60"
        style={{ boxShadow: mediumStars }} 
      />

      <div 
        className="absolute w-[3px] h-[3px] bg-transparent rounded-full opacity-80"
        style={{ boxShadow: largeStars }} 
      />
      
    </div>
  );
};

export default StarBackground;