"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { useDrag, DragState } from '@use-gesture/react';

interface ImageSliderDrag {
  images: string[];
}

const ImageSliderDrag: React.FC<ImageSliderDrag> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [props, api] = useSpring(() => ({ x: 0 }));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (isClient) {
      api.start({ x: -currentIndex * 100 });
    }
  }, [currentIndex, api, isClient]);

  const bind = useDrag(({ offset: [x], direction: [dx], distance: [distX] }: { offset: [number, number], direction: [number, number], distance: [number, number] }) => {
    if (isClient) {
      api.start({ x: x / window.innerWidth * 100 });
    }
  }, {
    bounds: isClient ? { left: -images.length * window.innerWidth, right: 0 } : undefined,
    rubberband: true,
    onDragEnd: ({ offset: [x], direction: [dx], distance: [distX] }: { offset: [number, number], direction: [number, number], distance: [number, number] }) => {
      if (isClient) {
        if (distX > window.innerWidth / 4) {
          if (dx > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
          } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }
        } else {
          api.start({ x: -currentIndex * 100 });
        }
      }
    }
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {isClient && (
        <animated.div {...bind()} className="flex transition-transform duration-500" style={{ transform: props.x.to(x => `translateX(${x}%)`) }}>
          {images.map((src, index) => (
            <div key={index} className="min-w-full">
              <Image src={src} alt={`Slide ${index}`} width={800} height={500} className="w-full h-full object-cover" />
            </div>
          ))}
        </animated.div>
      )}
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2">
        Next
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSliderDrag;