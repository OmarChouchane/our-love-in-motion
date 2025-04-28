
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface ChapterNavigationProps {
  chapters: string[];
  activeChapter: number;
  onChange: (index: number) => void;
}

const ChapterNavigation: React.FC<ChapterNavigationProps> = ({
  chapters,
  activeChapter,
  onChange
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex flex-col gap-3 items-center">
        {chapters.map((chapter, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            title={chapter}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeChapter === index 
                ? 'bg-love text-white scale-110' 
                : 'bg-gray-800 hover:bg-love-soft text-gray-400 hover:text-white'
            }`}
          >
            {activeChapter === index ? (
              <Heart className="w-4 h-4" fill="white" />
            ) : (
              <span className="text-xs">{index + 1}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChapterNavigation;
