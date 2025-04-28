
import React from 'react';
import FadeInSection from '../FadeInSection';
import { Heart } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: 'First Date',
    title: 'Our Beginning',
    description: 'That nervous excitement as we got to know each other',
    icon: '🌹'
  },
  {
    date: 'First Kiss',
    title: 'Unforgettable Moment',
    description: 'A perfect moment that felt like time stood still',
    icon: '💋'
  },
  {
    date: 'First Trip',
    title: 'Adventures Together',
    description: 'Exploring the world, creating memories that will last forever',
    icon: '✈️'
  },
  {
    date: 'Lazy Sundays',
    title: 'Simple Joys',
    description: 'Sometimes the best moments are the quiet ones together',
    icon: '🛋️'
  },
  {
    date: 'Through It All',
    title: 'Ups and Downs',
    description: 'Growing stronger through laughter and challenges',
    icon: '😂💔'
  }
];

const Chapter3Timeline: React.FC = () => {
  return (
    <div className="chapter-section bg-gradient-to-b from-[#1a181d] to-love-dark">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-playfair mb-16 text-center glow-effect">Our Love Timeline</h2>
      </FadeInSection>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-love opacity-50"></div>
          
          {timelineEvents.map((event, index) => (
            <FadeInSection key={index} delay={index * 200} className="mb-20">
              <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="mb-2">
                    <span className="inline-block bg-love/20 text-love-soft px-3 py-1 rounded-full text-sm">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-playfair mb-2">{event.title}</h3>
                  <p className="text-white/70">{event.description}</p>
                </div>
                
                {/* Center icon */}
                <div className="w-2/12 flex justify-center items-center relative">
                  <div className="w-12 h-12 flex items-center justify-center bg-love rounded-full z-10">
                    <span className="text-lg">{event.icon}</span>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </div>
            </FadeInSection>
          ))}
          
          {/* Final heart at the bottom of the timeline */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="rounded-full p-2 bg-love flex items-center justify-center">
              <Heart fill="white" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter3Timeline;
