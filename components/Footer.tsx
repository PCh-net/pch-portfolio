import React from 'react';



export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row z-10 mx-auto mt-12">
      <div className='w-3/3 md:w-2/3 p-4 m-2 text-slate-100 text-sm md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
        <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>Technologie, które używam:</h2>
        <ul className="list-disc list-inside">
          <li>React: Do tworzenia dynamicznych i responsywnych interfejsów użytkownika.</li>
          <li>Next.js 14: Do renderowania po stronie serwera i zoptymalizowanej wydajności.</li>
          <li>TypeScript: Aby poprawić jakość kodu i łatwość konserwacji.</li>
          <li>Tailwind CSS: do szybkiego tworzenia interfejsu użytkownika za pomocą CSS zorientowanego na użyteczność.</li>
          <li>Material-UI (MUI): Aby zapewnić spójny i atrakcyjny wizualnie system projektowania.</li>
        </ul>
      </div>
      <div className='w-3/3 md:w-1/3 p-4 m-2 text-slate-100 text-sm md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
        dddd

      </div>
    </div>
  )
}
