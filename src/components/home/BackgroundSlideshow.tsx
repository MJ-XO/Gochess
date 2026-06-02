
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1529699211952-734e80c4d42b',  // Strategic chess move
  'https://images.unsplash.com/photo-1580541832626-2a7131ee809f',  // Chess player thinking
  'https://images.unsplash.com/photo-1560174038-da43ac74f01b'   // Elegant chess pieces
];

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0" style={{ top: '64px' }}>
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url('${image}?auto=format&fit=crop&w=2000&q=80')`,
            opacity: currentImageIndex === index ? 0.8 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default BackgroundSlideshow;
