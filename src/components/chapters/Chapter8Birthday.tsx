
import React, { useState, useEffect } from 'react';
import FadeInSection from '../FadeInSection';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
// Import as a type to avoid direct import issues
import type { CreateTypes } from 'canvas-confetti';

declare global {
  interface Window {
    confetti: CreateTypes;
  }
}

const Chapter8Birthday: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  
  const triggerCelebration = () => {
    setRevealed(true);
    
    // Launch confetti
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    
    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };
    
    // Check if confetti is available in window
    if (window.confetti) {
      const confettiInterval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        
        if (timeLeft <= 0) {
          return clearInterval(confettiInterval);
        }
        
        // Launch confetti from both sides
        window.confetti({
          particleCount: Math.floor(randomInRange(10, 30)),
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.1, 0.3) },
          colors: ['#ea384c', '#FFDEE2', '#ffffff'],
          shapes: ['circle', 'square'],
          gravity: 0.5
        });
      }, 250);
    }
  };

  return (
    <div className="chapter-section bg-gradient-to-b from-love-dark to-[#1a181d]">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-playfair mb-16 text-center glow-effect">Today is About YOU</h2>
      </FadeInSection>

      <div className="max-w-3xl mx-auto text-center">
        <FadeInSection delay={200} className="mb-12">
          <div className="relative inline-block">
            {!revealed ? (
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-10 shadow-xl">
                <div className="mb-4">
                  <span className="text-6xl">🎁</span>
                </div>
                <p className="text-xl md:text-2xl mb-6">I have something special for you</p>
                <Button 
                  onClick={triggerCelebration}
                  className="bg-love hover:bg-love/80 text-white"
                >
                  <span className="mr-2">Reveal your gift</span>
                  <Sparkles className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="bg-black/30 backdrop-blur-sm border border-love/30 rounded-lg p-8 md:p-10 shadow-xl">
                  <div className="mb-6 relative">
                    <Sparkles className="absolute -top-4 -left-4 w-6 h-6 text-love-soft animate-pulse-glow" />
                    <span className="text-6xl">🎂</span>
                    <Sparkles className="absolute -bottom-4 -right-4 w-6 h-6 text-love-soft animate-pulse-glow" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-playfair mb-4 glow-effect-red">Happy Birthday!</h3>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="mb-4">Here's what I wish for you...</p>
                    <p className="mb-4">A year filled with laughter, love, and all the joy you deserve.</p>
                    <p className="mb-4">May every dream you have come true, and may we continue to build beautiful memories together.</p>
                    <p className="italic text-love-soft">And here's my real gift to you...</p>
                    
                    {/* Replace this with details about your actual gift */}
                    <p className="font-bold mt-4">[taw ta3ref ghodwa ...]</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Chapter8Birthday;
