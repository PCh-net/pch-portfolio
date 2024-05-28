// components/Accordion.tsx
"use client"
import React, { useState } from 'react';

type AccordionItemProps = {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="my-2 bg-blue-500 bg-opacity-20 backdrop-blur-sm rounded-lg overflow-hidden  shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer p-4 bg-blue-500 bg-opacity-50 text-white"
        onClick={onClick}
      >
        <h2>{title}</h2>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 bg-blue-500 bg-opacity-20 text-blue-100">
          {content}
        </div>
      )}
    </div>
  );
};

type AccordionProps = {
  items: { title: string; content: React.ReactNode }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
