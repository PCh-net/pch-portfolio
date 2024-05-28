// components/GlassButton.tsx
import React from 'react';

interface GlassButtonProps {
  text: string;
  fullWidth?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({ text, fullWidth = false }) => {
  return (
      <button
        className={`
          relative px-6 py-3 my-4 text-white transition duration-300 ease-in-out 
          transform bg-opacity-20 bg-blue-400 rounded-md shadow-lg backdrop-blur-sm 
          hover:bg-gradient-to-tr hover:from-blue-500 hover:to-teal-400 hover:text-white 
          hover:shadow-xl hover:scale-105 
          ${fullWidth ? 'w-full' : 'w-auto'}
        `}
      >
      {/* <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 transition duration-300 ease-in-out hover:opacity-100 rounded-lg"></span> */}
      <span className="relative">{text}</span>
    </button>
  );
};

export default GlassButton;
