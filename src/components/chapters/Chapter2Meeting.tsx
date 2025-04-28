
import React from 'react';
import FadeInSection from '../FadeInSection';
import { Sparkles } from 'lucide-react';

const Chapter2Meeting: React.FC = () => {
  return (
    <div className="chapter-section bg-gradient-to-b from-love-dark to-[#1a181d]">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-playfair mb-16 text-center glow-effect">The Moment We Met</h2>
      </FadeInSection>
      
      <div className="relative max-w-3xl mx-auto">
        <FadeInSection delay={300}>
          <div className="absolute -top-4 -left-4">
            <Sparkles className="w-8 h-8 text-love-soft animate-pulse-glow" />
          </div>
        </FadeInSection>
        
        <FadeInSection delay={500}>
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-xl md:text-2xl italic mb-6 text-love-soft">
                "This is where it all began..."
              </p>
              
              <div className="mb-8">
                {/* Replace with your actual image */}
                <div className="aspect-video bg-black/50 rounded overflow-hidden border border-white/20">
                  <img 
                    src="/1.JPG" 
                    alt="The moment we met" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-4 text-white/90">
                The universe conspired to bring us together on that perfect day. A chance encounter that would change everything forever.
              </p>
              
              <p className="text-lg md:text-xl text-white/90">
                Looking back, all the stars had to align for us to cross paths. I'm thankful every day that they did.
              </p>
            </div>
          </div>
        </FadeInSection>
        
        <FadeInSection delay={300}>
          <div className="absolute -bottom-4 -right-4">
            <Sparkles className="w-8 h-8 text-love-soft animate-pulse-glow" />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Chapter2Meeting;
