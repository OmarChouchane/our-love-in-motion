
import React from 'react';
import { cn } from '@/lib/utils';

interface PolaroidPhotoProps {
  imageSrc: string;
  caption: string;
  className?: string;
  rotation?: number;
  onClick?: () => void;
}

const PolaroidPhoto: React.FC<PolaroidPhotoProps> = ({
  imageSrc,
  caption,
  className = "",
  rotation = 0,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "bg-white p-2 pb-4 shadow-lg max-w-xs hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={onClick}
    >
      <div className="bg-gray-100 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={caption} 
          className="w-full h-48 object-cover"
        />
      </div>
      <p className="mt-2 text-center text-gray-800 font-medium text-sm">{caption}</p>
    </div>
  );
};

export default PolaroidPhoto;
