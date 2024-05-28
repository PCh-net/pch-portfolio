// pages/projekty.tsx
import type { NextPage } from 'next';
import Image from 'next/image';
import ParticleBackground from '@/components/ParticleBackground';
import Drawer from '@/components/Drawer';
import { AccordionList, AccordionItem } from '@/components/AccordionList';

const Projekty: NextPage = () => {
  const images = [
    '/images/mv/mv-app-mini-1.jpg',
    '/images/mv/mv-app-mini-1.jpg',
    '/images/mv/mv-app-mini-1.jpg',
  ];
  

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      <div>
      <ParticleBackground />
      <Drawer />
        <div className="flex flex-col md:flex-row z-10 mx-auto mt-12">
          <div className='w-3/3 md:w-2/3 p-4 text-slate-100 text-sm md:text-sm lg:text-base h-96'>
            <h2 className='text-4xl md:text-5xl lg:text-5xl'>Zapraszam do prezentacji mojego portfolio.</h2>

            <p className='text-slate-100 mt-4'>Piotr Ch.</p>

          </div>
          <div className='w-3/3 md:w-1/3 p-4 m-2 text-slate-100 text-sm md:text-sm lg:text-base backdrop-blur-sm bg-white/10 rounded-lg shadow-lg'>
            <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>Informacje o moich ostatnich projektach!</h2>
            <p>Next.js, React, Tailwind, ...</p>

          </div>
        </div>
      </div>
      <AccordionList>
          <AccordionItem title="First Item">
            <p>This is the content for the first item.</p>
            <a href="#" className="text-cyan-400">Link to more info</a>
          </AccordionItem>
          <AccordionItem title="Second Item">
            <p>This is the content for the second item.</p>
            <Image src="/images/mv/mv-app-mini-1.jpg" width={1600} height={900} alt="Placeholder image" className="mt-2" />
          </AccordionItem>
          <AccordionItem title="Third Item">
            <p>This is the content for the third item.</p>
            <video controls className="mt-2">
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AccordionItem>
        </AccordionList>

    </div>
  );
};

export default Projekty;
