"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

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
    <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden mt-4">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="min-w-full">
            <Image src={src} alt={`Slide ${index}`} width={1600} height={900} className="w-full h-full object-cover rounded-2xl transition duration-300 ease-in-out transform hover:scale-105" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 
      bg-gradient-to-tr from-blue-500 to-teal-400
      hover:bg-gradient-to-tr hover:from-blue-500 hover:to-teal-700
      ">
      <FaChevronCircleLeft size={24} />
      </button>

      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3
      bg-gradient-to-tr from-blue-500 to-teal-400
      hover:bg-gradient-to-tr hover:from-blue-500 hover:to-teal-700
      ">
      <FaChevronCircleRight size={24}/>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-cyan-500 shadow-2xl' : 'bg-slate-100 shadow-2xl'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
