
import React, { useState } from 'react';
import FadeInSection from '../FadeInSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import PolaroidPhoto from '../PolaroidPhoto';

// Sample gallery items - replace with your own photos
const galleryItems = [
  {
    id: 1,
    image: '/bac-sport.jpg',
    caption: 'Bac Sport',
    rotation: -3
  },
  {
    id: 2,
    image: '/awel-le7yet-jaddi.jpg',
    caption: 'Awel Le7yet Jaddi',
    rotation: 2
  },
  {
    id: 3,
    image: '/awel-match-koura.jpg',
    caption: 'Awel Match Koura',
    rotation: -1
  },
  {
    id: 4,
    image: '/awel-frippe.jpg',
    caption: 'Awel Habta Lel Frippe',
    rotation: 3
  },
  {
    id: 5,
    image: '/awel-camping.jpg',
    caption: 'Awel Camping',
    rotation: -2
  },
  
  {
    id: 6,
    image: '/awel-manege.jpg',
    caption: 'Awel Marra Nemchiw Lel Manège',
    rotation: 1
  },
];

const Chapter7Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <div className="chapter-section bg-gradient-to-b from-[#1a181d] to-love-dark">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-playfair mb-16 text-center glow-effect">
          Us Through Time
        </h2>
      </FadeInSection>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <FadeInSection key={item.id} delay={index * 150} className="flex justify-center">
              <PolaroidPhoto
                imageSrc={item.image}
                caption={item.caption}
                rotation={item.rotation}
                onClick={() => setSelectedPhoto(item)}
                className=""
              />
            </FadeInSection>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="bg-black/90 border-white/20 max-w-3xl">
          {selectedPhoto && (
            <div className="p-4">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.caption}
                className="w-full max-h-[70vh] object-contain"
              />
              <p className="text-center mt-4 text-xl font-playfair text-love-soft">
                {selectedPhoto.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chapter7Gallery;
