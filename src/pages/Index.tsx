
import React, { useState, useRef, useEffect } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import ChapterNavigation from '@/components/ChapterNavigation';

// Chapter components
import Chapter1Welcome from '@/components/chapters/Chapter1Welcome';
import Chapter2Meeting from '@/components/chapters/Chapter2Meeting';
import Chapter3Timeline from '@/components/chapters/Chapter3Timeline';
import Chapter4Reasons from '@/components/chapters/Chapter4Reasons';
import Chapter5InsideJokes from '@/components/chapters/Chapter5InsideJokes';
import Chapter6Letter from '@/components/chapters/Chapter6Letter';
import Chapter7Gallery from '@/components/chapters/Chapter7Gallery';
import Chapter8Birthday from '@/components/chapters/Chapter8Birthday';
import Chapter9Final from '@/components/chapters/Chapter9Final';

const chapters = [
  "Welcome",
  "The Moment We Met",
  "Our Timeline",
  "Reasons I Love You",
  "Our Inside Jokes",
  "A Letter For You",
  "Our Photos",
  "Birthday Gift",
  "Forever Yours"
];

const Index = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [storyStarted, setStoryStarted] = useState(false);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const handleStart = () => {
    setStoryStarted(true);
    setTimeout(() => {
      chapterRefs.current[1]?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };
  
  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setActiveChapter(0);
      setStoryStarted(false);
    }, 1000);
  };
  
  const handleChapterChange = (index: number) => {
    chapterRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let newActiveChapter = 0;
      chapterRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            newActiveChapter = index;
          }
        }
      });
      
      setActiveChapter(newActiveChapter);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Add canvas-confetti dependency for birthday section
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-love-dark text-white overflow-x-hidden">
      <FloatingHearts count={20} />
      
      {storyStarted && (
        <ChapterNavigation
          chapters={chapters}
          activeChapter={activeChapter}
          onChange={handleChapterChange}
        />
      )}
      
      {/* Welcome */}
      <div ref={(el) => chapterRefs.current[0] = el}>
        <Chapter1Welcome onStart={handleStart} />
      </div>
      
      {storyStarted && (
        <>
          {/* The Moment We Met */}
          <div ref={(el) => chapterRefs.current[1] = el}>
            <Chapter2Meeting />
          </div>
          
          {/* Our Timeline */}
          <div ref={(el) => chapterRefs.current[2] = el}>
            <Chapter3Timeline />
          </div>
          
          {/* Reasons I Love You */}
          <div ref={(el) => chapterRefs.current[3] = el}>
            <Chapter4Reasons />
          </div>
          
          {/* Inside Jokes */}
          <div ref={(el) => chapterRefs.current[4] = el}>
            <Chapter5InsideJokes />
          </div>
          
          {/* Love Letter */}
          <div ref={(el) => chapterRefs.current[5] = el}>
            <Chapter6Letter />
          </div>
          
          {/* Photo Gallery */}
          <div ref={(el) => chapterRefs.current[6] = el}>
            <Chapter7Gallery />
          </div>
          
          {/* Birthday Gift */}
          <div ref={(el) => chapterRefs.current[7] = el}>
            <Chapter8Birthday />
          </div>
          
          {/* Final Message */}
          <div ref={(el) => chapterRefs.current[8] = el}>
            <Chapter9Final onRestart={handleRestart} />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
