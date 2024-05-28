// // components/AccordionList.tsx
// "use client";
// import React, { useState } from 'react';

// type AccordionItemProps = {
//   title: string;
//   children: React.ReactNode;
// };

// const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="my-2 bg-blue-500 bg-opacity-20 rounded-lg overflow-hidden backdrop-blur-sm shadow-lg">
//       <div
//         className="flex justify-between items-center cursor-pointer p-4 bg-blue-500 bg-opacity-50 text-white"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <h2>{title}</h2>
//         <svg
//           className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </div>
//       {isOpen && (
//         <div className="p-4 bg-blue-500 bg-opacity-20 text-slate-100">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// type AccordionListProps = {
//   children: React.ReactNode;
// };

// const AccordionList: React.FC<AccordionListProps> = ({ children }) => {
//   return <div className="space-y-2">{children}</div>;
// };

// export { AccordionList, AccordionItem };
// components/AccordionList.tsx
"use client";
// components/AccordionList.tsx

import React, { useState } from 'react';

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen = false, onClick }) => {
  return (
    <div className="my-2 bg-blue-500 bg-opacity-20 rounded-lg overflow-hidden backdrop-blur-sm shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer p-4 bg-blue-500 bg-opacity-50 text-white"
        onClick={onClick}
      >
        <h2 className='text-cyan-200 hover:text-cyan-400'>{title}</h2>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 bg-blue-500 bg-opacity-20 text-slate-100">
          {children}
        </div>
      )}
    </div>
  );
};

type AccordionListProps = {
  children: React.ReactNode;
};

const AccordionList: React.FC<AccordionListProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const items = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
        isOpen: index === openIndex,
        onClick: () => handleItemClick(index),
      });
    }
    return child;
  });

  return <div className="space-y-2">{items}</div>;
};

export { AccordionList, AccordionItem };
