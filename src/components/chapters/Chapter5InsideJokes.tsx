
import React from 'react';
import FadeInSection from '../FadeInSection';
import { cn } from '@/lib/utils';

interface JokeItem {
  text: string;
  emoji: string;
  color: string;
  rotation: number;
}

const jokes: JokeItem[] = [
  { 
    text: "The duck story", 
    emoji: "🦆", 
    color: "bg-blue-100 text-blue-800", 
    rotation: -3 
  },
  { 
    text: "Our nickname rituals", 
    emoji: "💬", 
    color: "bg-purple-100 text-purple-800", 
    rotation: 2 
  },
  { 
    text: 'Every time we say "same brain"', 
    emoji: "🧠", 
    color: "bg-pink-100 text-pink-800", 
    rotation: -2 
  },
  { 
    text: "That time at the restaurant", 
    emoji: "🍽️", 
    color: "bg-yellow-100 text-yellow-800", 
    rotation: 3 
  },
  { 
    text: "Our secret handshake", 
    emoji: "🤝", 
    color: "bg-green-100 text-green-800", 
    rotation: -1 
  },
  { 
    text: "The movie quote we always say", 
    emoji: "🎬", 
    color: "bg-red-100 text-red-800", 
    rotation: 2 
  },
  { 
    text: "Inside joke #7", 
    emoji: "😂", 
    color: "bg-orange-100 text-orange-800", 
    rotation: -2 
  },
  { 
    text: "That one song we always dance to", 
    emoji: "🎵", 
    color: "bg-indigo-100 text-indigo-800", 
    rotation: 1 
  }
];

const Chapter5InsideJokes: React.FC = () => {
  return (
    <div className="chapter-section bg-gradient-to-b from-[#1a181d] to-love-dark">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-playfair mb-16 text-center glow-effect">Our Secret World</h2>
      </FadeInSection>

      <div className="max-w-5xl mx-auto relative">
        {jokes.map((joke, index) => (
          <FadeInSection 
            key={index} 
            delay={index * 150} 
            className={cn(
              "absolute",
              index % 4 === 0 && "top-0 left-[10%]",
              index % 4 === 1 && "top-[20%] right-[15%]",
              index % 4 === 2 && "top-[45%] left-[5%]",
              index % 4 === 3 && "top-[60%] right-[10%]",
            )}
            style={{
              transform: `rotate(${joke.rotation}deg)`,
              zIndex: 10 + index
            }}
          >
            <div className={cn(
              "p-4 rounded-lg shadow-lg max-w-xs hover:scale-105 transition-all duration-300",
              joke.color
            )}>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{joke.emoji}</span>
                <span className="font-medium">{joke.text}</span>
              </div>
            </div>
          </FadeInSection>
        ))}
        
        {/* Empty div to create space for absolute positioning */}
        <div className="h-[30rem] w-full"></div>
      </div>
    </div>
  );
};

export default Chapter5InsideJokes;
