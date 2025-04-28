
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = "", 
  speed = 100,
  delay = 0,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      
      return () => clearTimeout(startTimeout);
    }
    
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else if (started && currentIndex === text.length && onComplete) {
      onComplete();
    }
  }, [text, speed, currentIndex, delay, started, onComplete]);

  return (
    <div className={`relative ${className}`}>
      <span>{displayText}</span>
      {currentIndex < text.length && (
        <span className="absolute right-0 border-r-2 border-white h-full animate-typewriter-cursor"></span>
      )}
    </div>
  );
};

export default TypewriterText;
