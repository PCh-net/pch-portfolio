// components/Drawer.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        onClick={toggleDrawer} 
        className="fixed top-4 left-4 z-50 text-white bg-blue-500/40 p-3 rounded-full"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-tr from-blue-900 via-blue-700 to-blue-500 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <div className="flex flex-col p-4 space-y-6 mt-16">
          <Link href="/" onClick={toggleDrawer} className="text-xl hover:text-blue-400">Home</Link>
          <Link href="#ComicBook" onClick={toggleDrawer} className="text-xl hover:text-blue-400">ComicBook Hub</Link>
          <Link href="#game-app" onClick={toggleDrawer} className="text-xl hover:text-blue-400">GAME APP</Link>
          <Link href="#spot-app" onClick={toggleDrawer} className="text-xl hover:text-blue-400">SPOT APP</Link>
          <Link href="#envato-app" onClick={toggleDrawer} className="text-xl hover:text-blue-400">Envato APP</Link>
          <Link href="#blog-khaz" onClick={toggleDrawer} className="text-xl hover:text-blue-400">BLOG OSOBISTY</Link>
          <Link href="#pch-net" onClick={toggleDrawer} className="text-xl hover:text-blue-400">PCH NET</Link>
          <Link href="#o-mnie" onClick={toggleDrawer} className="text-xl hover:text-blue-400">O MNIE</Link>
        </div>
      </div>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
};

export default Drawer;
