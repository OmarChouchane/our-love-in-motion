
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count = 15 }) => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; animationDelay: string; animationDuration: string; size: string }>>([]);

  useEffect(() => {
    const newHearts = [];
    for (let i = 0; i < count; i++) {
      const left = `${Math.random() * 100}%`;
      const animationDelay = `${Math.random() * 5}s`;
      const animationDuration = `${5 + Math.random() * 10}s`;
      const size = ['sm', 'md', 'lg'][Math.floor(Math.random() * 3)];
      
      newHearts.push({
        id: i,
        left,
        animationDelay,
        animationDuration,
        size
      });
    }
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`floating-heart ${heart.size}`}
          style={{
            left: heart.left,
            top: '100%',
            animation: `float ${heart.animationDuration} ease-in-out ${heart.animationDelay} infinite`,
            transform: `translateY(-${100 + Math.random() * 900}px)`
          }}
        >
          <Heart fill={heart.size === 'md' ? '#ea384c' : '#FFDEE2'} />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
