"use client";
import React from 'react';
import Link from 'next/link';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  newTab?: boolean;
}

const LinkText: React.FC<LinkProps> = ({ to, children, newTab = false }) => {
  return (
    <Link href={to} rel='noopener noreferrer' target={newTab ? '_blank' : '_self'}>
      <span
        className="flex relative text-cyan-300 hover:text-cyan-200 transition-colors duration-300 no-underline cursor-pointer items-center"
      >
        {children}
      </span>
    </Link>
  );
};

export default LinkText;
