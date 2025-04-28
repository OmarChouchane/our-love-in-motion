
import React, { useState } from 'react';
import FadeInSection from '../FadeInSection';
import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface LoveReason {
  text: string;
}

const loveReasons: LoveReason[] = [
  { text: "The way you smile" },
  { text: "Your loyalty" },
  { text: "Your passion" },
  { text: "The way you understand me" },
  { text: "Your strength" },
  { text: "Your kindness" },
  { text: "The way you care for others" },
  { text: "Your silly jokes" },
  { text: "How you always know what to say" },
  { text: "The way you look at me" },
  { text: "Your determination" },
  { text: "How you push me to be better" },
  { text: "The little things you do" },
  { text: "Your honesty" },
  { text: "Your sense of humor" },
  { text: "How we can talk for hours" },
  { text: "The way you support my dreams" },
  { text: "Your thoughtfulness" },
  { text: "How you make me feel safe" },
  { text: "Because you're you" },
  { text: "Everything that makes you unique" },
];

const Chapter4Reasons: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <div className="chapter-section min-h-screen py-20 bg-gradient-to-b from-love-dark to-[#1a181d]">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-playfair mb-16 text-center glow-effect">
          21 Reasons I Love You
        </h2>
      </FadeInSection>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveReasons.map((reason, index) => (
            <FadeInSection key={index} delay={index * 100} className="h-full">
              <Card 
                className={`bg-black/30 border border-love/30 hover:border-love/70 transition-all duration-300 h-full cursor-pointer group ${
                  flippedCards.includes(index) ? 'bg-love/10' : ''
                }`}
                onClick={() => toggleCard(index)}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="mb-4">
                    <Heart 
                      className={`w-8 h-8 transition-all duration-500 ${
                        flippedCards.includes(index) 
                          ? 'text-love scale-110' 
                          : 'text-love-soft scale-100'
                      }`} 
                      fill={flippedCards.includes(index) ? "#ea384c" : "#FFDEE2"}
                    />
                  </div>
                  
                  <div className="text-center">
                    <span className="text-lg font-medium">{index + 1}</span>
                    <p className={`mt-2 transition-all duration-300 ${
                      flippedCards.includes(index) ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
                    }`}>
                      {reason.text}
                    </p>
                    
                    {!flippedCards.includes(index) && (
                      <p className="mt-2 text-white/50 group-hover:text-white/80">
                        Click to reveal
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapter4Reasons;
