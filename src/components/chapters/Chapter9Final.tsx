
import React from 'react';
import FadeInSection from '../FadeInSection';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface Chapter9FinalProps {
  onRestart: () => void;
}

const Chapter9Final: React.FC<Chapter9FinalProps> = ({ onRestart }) => {
  return (
    <div className="chapter-section bg-gradient-to-b from-[#1a181d] to-love-dark">
      <div className="stars-background absolute inset-0 overflow-hidden z-0">
        {/* Add star particles here */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-pulse-glow"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          ></div>
        ))}
      </div>

      <FadeInSection delay={300} className="z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-8 glow-effect">
          You Are My Everything
        </h2>
        
        <FadeInSection delay={600} className="mb-12">
          <p className="text-xl md:text-2xl text-love-soft mb-4 italic">
            "No matter what, I'll always be yours."
          </p>
          <p className="text-xl md:text-2xl">
            Happy Birthday, my love.
          </p>
        </FadeInSection>
        
        <FadeInSection delay={900}>
          <Button 
            onClick={onRestart} 
            variant="outline" 
            className="mt-8 bg-transparent border border-love hover:bg-love text-white text-lg py-6 px-8 rounded-full group transition-all duration-500"
          >
            <span className="mr-2">Replay Our Story</span>
            <Heart fill="#ea384c" className="w-5 h-5 group-hover:animate-pulse" />
          </Button>
        </FadeInSection>
      </FadeInSection>
    </div>
  );
};

export default Chapter9Final;
