// "use client";
// import React from 'react';
// import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

// interface GlassButtonProps {
//   text: string;
//   fullWidth?: boolean;
//   url?: string;
//   newTab?: boolean;
// }

// const GlassButton: React.FC<GlassButtonProps> = ({ text, fullWidth = false, url, newTab = false }) => {
//   const handleClick = () => {
//     if (url) {
//       if (newTab) {
//         window.open(url, '_blank');
//       } else {
//         window.location.href = url;
//       }
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`
//         relative px-6 py-3 my-4 text-white transition duration-300 ease-in-out 
//         transform bg-opacity-20 bg-blue-400 rounded-md shadow-lg backdrop-blur-sm 
//         hover:bg-gradient-to-tr hover:from-blue-500 hover:to-teal-400 hover:text-white 
//         hover:shadow-xl hover:scale-105 
//         ${fullWidth ? 'w-full' : 'w-auto'}
//       `}
//     >
//       <span className="relative">{text}</span>
//     </button>
//   );
// };

// export default GlassButton;
// components/GlassButton.tsx
"use client";

import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface GlassButtonProps {
  text: string;
  fullWidth?: boolean;
  url?: string;
  newTab?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({ text, fullWidth = false, url, newTab = false }) => {
  const handleClick = () => {
    if (url) {
      if (newTab) {
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        flex justify-center items-center 
        relative px-6 py-3 my-4 text-white transition duration-300 ease-in-out 
        transform bg-opacity-20 bg-blue-400 rounded-md shadow-lg backdrop-blur-sm 
        hover:bg-gradient-to-tr hover:from-blue-500 hover:to-teal-400 hover:text-white 
        hover:shadow-xl hover:scale-105 
        ${fullWidth ? 'w-full' : 'w-auto'}
      `}
    >
      <span className="relative flex items-center">
        {text}
        {newTab && <FaArrowUpRightFromSquare size={12} className="ml-2" />}
      </span>
    </button>
  );
};

export default GlassButton;
