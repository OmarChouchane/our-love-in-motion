
import React, { useEffect, useRef, useState } from 'react';
import FadeInSection from '../FadeInSection';
import TypewriterText from '../TypewriterText';

const letterParagraphs = [
  "My Dearest,",
  "I wanted to create something special for you - something that would make you feel as loved as you truly are. This is my heart, digitized but no less real.",
  "From the moment we met, you've filled my life with joy, laughter, and love beyond what I thought possible. Every day with you is a gift that I cherish.",
  "I made this because I love you, and because our love is art. It deserves to be celebrated, remembered, and shared between us.",
  "Happy birthday, my love. Here's to many more years of creating beautiful memories together.",
  "Forever yours,"
];

const Chapter6Letter: React.FC = () => {
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsRevealing(true);
        } else {
          setIsRevealing(false);
          setVisibleParagraphs(0);
        }
      });
    }, { threshold: 0.3 });
    
    if (letterRef.current) {
      observer.observe(letterRef.current);
    }
    
    return () => {
      if (letterRef.current) {
        observer.unobserve(letterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isRevealing && visibleParagraphs < letterParagraphs.length) {
      const timer = setTimeout(() => {
        setVisibleParagraphs(prev => prev + 1);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isRevealing, visibleParagraphs]);

  return (
    <div className="chapter-section bg-gradient-to-b from-love-dark to-[#1a181d]" ref={letterRef}>
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-playfair mb-16 text-center glow-effect">
          A Letter From Me to You
        </h2>
      </FadeInSection>

      <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-10 shadow-xl">
        <div className="prose prose-invert max-w-none">
          {letterParagraphs.slice(0, visibleParagraphs).map((paragraph, index) => (
            <div key={index} className="mb-6">
              <p className={`text-lg md:text-xl ${
                index === 0 || index === letterParagraphs.length - 1 ? 'italic text-love-soft' : ''
              }`}>
                {paragraph}
              </p>
            </div>
          ))}
          
          {visibleParagraphs < letterParagraphs.length && isRevealing && (
            <div className="h-6 relative">
              <span className="absolute left-0 top-[0.7rem] w-4 h-4 rounded-full bg-love-soft animate-pulse"></span>
              <span className="absolute left-6 top-[0.7rem] w-4 h-4 rounded-full bg-love animate-pulse"></span>
              <span className="absolute left-12 top-[0.7rem] w-4 h-4 rounded-full bg-love-soft animate-pulse"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chapter6Letter;
