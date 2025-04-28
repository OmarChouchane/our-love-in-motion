
import React, { useState } from 'react';
import TypewriterText from '../TypewriterText';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface Chapter1WelcomeProps {
  onStart: () => void;
}

const Chapter1Welcome: React.FC<Chapter1WelcomeProps> = ({ onStart }) => {
  const [showButton, setShowButton] = useState(false);
  
  return (
    <div className="chapter-section flex items-center justify-center">
      <div className="text-center max-w-lg">
        <TypewriterText 
          text="Do you believe in soulmates?" 
          className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-12 glow-effect"
          onComplete={() => setShowButton(true)}
        />
        
        {showButton && (
          <div className="animate-fade-in">
            <Button
              onClick={onStart}
              variant="outline"
              className="mt-8 bg-transparent border border-love hover:bg-love text-white text-lg py-6 px-8 rounded-full group transition-all duration-500"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform duration-500">Start Our Story</span>
              <Heart className="w-5 h-5 animate-pulse-glow" fill="#ea384c" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter1Welcome;
