import ParticleBackground from '@/components/ParticleBackground';
import Drawer from '@/components/Drawer';
import GlassButton from '@/components/GlassButton';
import ImageSlider from '@/components/ImageSlider';
import Accordion from '@/components/Accordion';
import VimeoPlayer from '@/components/VimeoPlayer';
import LinkText from '@/components/LinkText';
import { Footer } from '@/components/Footer';
import { mv_images, game_images, spot_images, env_images, khaz_images, pch_net_images, khaz_wizytowki } from '@/constants/Sliders';
import ImageSliderDrag from '@/components/ImageSliderDrag';
import { FaVimeoV, FaFacebookF } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { AccordionList, AccordionItem } from '@/components/AccordionList';
import Image from 'next/image';
import Link from 'next/link';




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div>
        <ParticleBackground />
        <Drawer />
        <div className="flex flex-col md:flex-row z-10 mx-auto mt-12">
          <div className='w-3/3 md:w-2/3 p-4 text-slate-100 text-sm md:text-sm lg:text-base'>
            <h2 className='text-4xl md:text-5xl lg:text-5xl'>Zapraszam do prezentacji mojego portfolio.</h2>
            <p className='text-slate-100 mt-4'>Piotr Ch.</p>
          </div>
          <div className='w-3/3 md:w-1/3 p-4 m-2 text-slate-100 text-sm md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
            <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>Informacje o moich ostatnich projektach!</h2>
            <p><LinkText to="#ComicBook" newTab={false}>ComicBook Hub</LinkText></p>
            <p><LinkText to="#game-app" newTab={false}>GAME APP</LinkText></p>
            <p><LinkText to="#spot-app" newTab={false}>SPOT APP</LinkText></p>
            <p><LinkText to="#envato-app" newTab={false}>Envato APP</LinkText></p>
            <p><LinkText to="#blog-khaz" newTab={false}>Blog - Khaz</LinkText></p>
            <p><LinkText to="#pch-net" newTab={false}>PCH NET</LinkText></p>
          </div>
        </div>
        {/* --- */}
        <div id='ComicBook' className="flex flex-col md:flex-row z-10 mx-auto mt-12">
          <div className='w-3/3 md:w-2/3 p-4 m-2 text-slate-100 text-xs md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
            <h2 className='text-2xl md:text-4xl lg:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent'>ComicBook Hub</h2>
            <p>ComicBook Hub to platforma dla entuzjastów komiksów, która umożliwia przeglądanie szerokiego zakresu komiksów, serii i eventów związanych z komiksami. Zbudowana na solidnych technologiach takich jak React, API i Tailwind CSS, zapewnia płynne i atrakcyjne wizualnie doświadczenie użytkownika.</p>
            <ImageSlider images={mv_images} />
          </div>
          <div className='w-3/3 md:w-1/3 m-2 md:m-0 text-cyan-100 text-sm md:text-sm lg:text-base h-96'>
            <AccordionList>
              <AccordionItem title="Technologie">
                <p>Java Script, API, Node</p>         
              </AccordionItem>
              <AccordionItem title="Stylizacja - Front End">
                <p>React, Tailwind</p>
              </AccordionItem>
              <AccordionItem title="API">
                <p>Marvel© - Interactive API tester</p>
                <LinkText to="https://developer.marvel.com/" newTab={true}>developer.marvel.com <FaArrowUpRightFromSquare size={12} className='ml-2'/></LinkText>
              </AccordionItem>
              <AccordionItem title="Vimeo">
              <p className="flex items-center"><FaVimeoV size={24} className='mr-4' />Prezentacja:</p>
                <VimeoPlayer videoId="949290898" aspectRatio="16:9" />
              </AccordionItem>
            </AccordionList>
            <GlassButton text="Przejdź do aplikacji" fullWidth={true} url='https://mv-app-ruby.vercel.app/' newTab={true} />
          </div>
        </div>
        {/* --- */}
        <div className="flex flex-col md:flex-row z-10 mx-auto mt-24 h-16 md:h-32">

        </div>
        {/* --- */}
        <div id='game-app' className="flex flex-col md:flex-row z-10 mx-auto mt-12">
          <div className='w-3/3 md:w-2/3 p-4 m-2 text-slate-100 text-xs md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
          <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>GAME APP</h2>
            <p>Moja aplikacja jest nowoczesnym narzędziem służącym do odkrywania i przeglądania najnowszych gier komputerowych. Została stworzona z wykorzystaniem React, TypeScript, i Tailwind CSS, co zapewnia szybkie i płynne działanie oraz atrakcyjny, responsywny interfejs użytkownika. Integracja z API IGDB pozwala na dostęp do aktualnych danych o grach z różnych platform, od konsol po urządzenia mobilne. Aplikacja oferuje użytkownikom intuicyjne filtry i wyszukiwanie, umożliwiając łatwe odnajdywanie gier spełniających konkretne kryteria, takie jak gatunek, platforma czy popularność.</p>
          <ImageSlider images={game_images} />
          </div>
          <div className='w-3/3 md:w-1/3 m-2 md:m-0 text-cyan-100 text-sm md:text-sm lg:text-base h-96'>
            <AccordionList>
              <AccordionItem title="Technologie">
                <p>Type Script, APIcalypse, Node</p> 
              </AccordionItem>
              <AccordionItem title="Stylizacja - Front End">
                <p>React, Tailwind</p>
              </AccordionItem>
              <AccordionItem title="API">
                <p>IGDB API v.4</p>
                <LinkText to="https://www.igdb.com/api" newTab={true}>www.igdb.com/api <FaArrowUpRightFromSquare size={12} className='ml-2' /></LinkText>
              </AccordionItem>
              <AccordionItem title="Vimeo">
              <p className="flex items-center"><FaVimeoV size={24} className='mr-4' />Prezentacja:</p>
                <VimeoPlayer videoId="949966044" aspectRatio="16:9" />
              </AccordionItem>
            </AccordionList>
            <GlassButton text="Przejdź do aplikacji" fullWidth={true} url='https://game-app-eta.vercel.app/' newTab={true} />
          </div>
        </div>
        {/* --- */}
        <div className="flex flex-col md:flex-row z-10 mx-auto mt-24 h-16 md:h-32">

        </div>
        {/* --- */}
        <div id='spot-app' className="flex flex-col md:flex-row z-10 mx-auto mt-12">
          <div className='w-3/3 md:w-2/3 p-4 m-2 text-slate-100 text-xs md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
          <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>SPOT APP</h2>
            <p>Spotify Explorer to nowoczesna aplikacja webowa, stworzona przy użyciu technologii React, TypeScript oraz Tailwind CSS, która umożliwia użytkownikom przeglądanie i odkrywanie zasobów muzycznych dostępnych na Spotify.
            </p>
            <p>Dzięki integracji z API Spotify, aplikacja oferuje bogatą funkcjonalność, pozwalając na wyszukiwanie utworów, przeglądanie playlist, albumów oraz profili artystów.</p>
          <ImageSlider images={spot_images} />

          {/* <ImageSliderDrag images={spot_images} /> */}
          </div>
          <div className='w-3/3 md:w-1/3 m-2 md:m-0 text-cyan-100 text-sm md:text-sm lg:text-base h-96'>
            <AccordionList>
              <AccordionItem title="Technologie">
                <p>Type Script, API, Node</p> 
              </AccordionItem>
              <AccordionItem title="Stylizacja - Front End">
                <p>React, Tailwind</p>
              </AccordionItem>
              <AccordionItem title="API">
                <p>Spotify Web API</p>
                <LinkText to="https://developer.spotify.com/" newTab={true}>developer.spotify.com/ <FaArrowUpRightFromSquare size={12} className='ml-2' /></LinkText>
              </AccordionItem>
              <AccordionItem title="Vimeo">
                <p className="flex items-center"><FaVimeoV size={24} className='mr-4' />Prezentacja:</p>
                <VimeoPlayer videoId="950017470" aspectRatio="16:9" />
              </AccordionItem>
            </AccordionList>
            <GlassButton text="Przejdź do aplikacji" fullWidth={true} url='https://spot-app-tawny.vercel.app/' newTab={true} />
          </div>
        </div>
        {/* --- */}
        <div className="flex flex-col md:flex-row z-10 mx-auto mt-24 h-16 md:h-32">

        </div>
        {/* --- */}
        <div id='envato-app' className="flex flex-col md:flex-row z-10 mx-auto mt-12">
          <div className='w-3/3 md:w-2/3 p-4 m-2 text-slate-100 text-xs md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
            <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>Envato APP</h2>
            <p>Aplikacja zintegrowana z API Envato, która umożliwia przeglądanie wszystkich zasobów z różnych rynków Envato.</p>
            <p>Aplikacja pozwala użytkownikom na łatwe i szybkie przeglądanie elementów z takich serwisów jak Themeforest, Videohive, Codecanyon, Photodune, Audiojungle oraz Graphicriver.</p>
            <p>Aplikacja wykorzystuje następujące najnowocześniejsze technologie, aby zapewnić solidną i wydajną obsługę użytkownika:</p>
            <ImageSlider images={env_images} />

          </div>
          <div className='w-3/3 md:w-1/3 m-2 md:m-0 text-cyan-100 text-sm md:text-sm lg:text-base h-96'>
            <AccordionList>
              <AccordionItem title="Technologie">
                <p>Type Script, API, NextJS 14, Node</p> 
              </AccordionItem>
              <AccordionItem title="Stylizacja - Front End">
                <p>React, Tailwind, MUI</p>
              </AccordionItem>
              <AccordionItem title="API">
                <p>Envato API</p>
                <LinkText to="https://build.envato.com/api/" newTab={true}>build.envato.com/api <FaArrowUpRightFromSquare size={12} className='ml-2' /></LinkText>
              </AccordionItem>
              <AccordionItem title="Vimeo">
              <p className="flex items-center"><FaVimeoV size={24} className='mr-4' />Prezentacja:</p>
                <VimeoPlayer videoId="950019759" aspectRatio="16:9" />
              </AccordionItem>
            </AccordionList>
            <GlassButton text="Przejdź do aplikacji" fullWidth={true} url='https://env-app.vercel.app/' newTab={true} />
          </div>
        </div>
        {/* --- */}
        <div className="flex flex-col md:flex-row z-10 mx-auto mt-24 h-16 md:h-32">

        </div>
        {/* --- */}
        <div id='blog-khaz' className="flex flex-col md:flex-row z-10 mx-auto mt-12">
          <div className='w-3/3 md:w-2/3 p-4 m-2 text-slate-100 text-xs md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
            <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>BLOG OSOBISTY</h2>
            <p>Khaz - marka biuterii z kryształów.</p>
            <p>Moje projekty biuterii z kryształów SWAROVSKI® ELEMENTS.</p>
            <ImageSlider images={khaz_images} />
          </div>
          <div className='w-3/3 md:w-1/3 m-2 md:m-0 text-cyan-100 text-sm md:text-sm lg:text-base h-96'>
            <AccordionList>
              <AccordionItem title="Technologie">
                <p>Wordpress</p> 
              </AccordionItem>
              <AccordionItem title="Zdjęcia produktów">
                <p>400 zdjęć biżuterii z kryształów oraz pereł Swarovski® AG. Fotografia Canon EOS, namiot bezcieniowy, obróbka cyfrowa Photoshop.</p>
              </AccordionItem>
              <AccordionItem title="Logo">
                <Image src="/images/khaz/logo_khaz_750px_white_dots.png" width={750} height={390} alt="logo_khaz_750px_white_dots" className="mt-2" />
              </AccordionItem>
              <AccordionItem title="Wiztytówki">
                <ImageSlider images={khaz_wizytowki} />
              </AccordionItem>
              <AccordionItem title="Identyfikacja wizualna">
                <Image src="/images/khaz/iw_str_01.jpg" width={850} height={1192} alt="iw_str_01" className="mt-2" />
              </AccordionItem>
              <AccordionItem title="Facebook">
              <p className="flex items-center">
                <LinkText to="https://www.facebook.com/khaz.bizuteria/" newTab={true}>facebook.com/khaz.bizuteria <FaArrowUpRightFromSquare size={12} className='ml-2' /></LinkText>
              </p>
              </AccordionItem>
            </AccordionList>
            <GlassButton text="Przejdź do strony" fullWidth={true} url='http://blog.khaz.pl' newTab={true} />
          </div>
        </div>
        {/* --- */}
        <div className="flex flex-col md:flex-row z-10 mx-auto mt-48 h-96 md:h-64">

        </div>
        {/* --- */}
        <div id='pch-net' className="flex flex-col md:flex-row z-10 mx-auto mt-12">
          <div className='w-3/3 md:w-2/3 p-4 m-2 text-slate-100 text-xs md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
            <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>PCH NET</h2>
            <p>Strona internetowa z szablonami TemplateMonster.</p>
            <p>Strona www.pch.net.pl oferuje różnorodne szablony stron internetowych dostępne w serwisie TemplateMonster. Jest to idealne miejsce dla osób poszukujących profesjonalnych i estetycznych rozwiązań do tworzenia stron internetowych. Na stronie można znaleźć szeroki wybór szablonów, które można łatwo dostosować do indywidualnych potrzeb. Szablony są przeznaczone zarówno dla firm, jak i użytkowników indywidualnych, którzy chcą stworzyć atrakcyjne witryny internetowe bez konieczności posiadania zaawansowanej wiedzy technicznej.</p>
            <ImageSlider images={pch_net_images} />
          </div>
          <div className='w-3/3 md:w-1/3 m-2 md:m-0 text-cyan-100 text-sm md:text-sm lg:text-base h-96'>
            <AccordionList>
              <AccordionItem title="Technologie">
                <p>Wordpress</p>
              </AccordionItem>
              <AccordionItem title="Banery reklamowe">
                <Image src="/images/pch/baner-rwd-1-960x250px.jpg" width={960} height={250} alt="baner-rwd-1-960x250px" className="mt-2" />
              </AccordionItem>
              <AccordionItem title="Logo">
                <Image src="/images/pch/logo4.jpg" width={500} height={500} alt="logo4" className="mt-2" />
              </AccordionItem>
              <AccordionItem title="Program lojalnościowy">
                <Image src="/images/pch/partner-templatemonster.png" width={640} height={640} alt="partner-templatemonster" className="mt-2" />
              </AccordionItem>
              <AccordionItem title="Link aff. TemplateMonster">
                <LinkText to="https://www.templatemonster.com/?aff=PCh_net" newTab={true}>www.templatemonster.com/?aff=PCh_net <FaArrowUpRightFromSquare size={12} className='ml-2' /></LinkText>
              </AccordionItem>
            </AccordionList>
            <GlassButton text="Przejdź do strony" fullWidth={true} url='http://pch.net.pl' newTab={true} />
          </div>
        </div>
        {/* --- */}
        <div className="flex flex-col md:flex-row z-10 mx-auto mt-24 h-96 md:h-32">

        </div>
        {/* --- */}
        <div id='o-mnie' className="flex flex-col md:flex-row z-10 mx-auto mt-12">
          <div className='w-3/3 md:w-2/3 p-4 m-2 text-slate-100 text-sm md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg'>
            <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>Technologie z których korzystam:</h2>
            <ul className="list-disc list-inside">
              <li>React: Do tworzenia dynamicznych i responsywnych interfejsów użytkownika.</li>
              <li>Next.js 14: Do renderowania po stronie serwera i zoptymalizowanej wydajności.</li>
              <li>TypeScript: Aby poprawić jakość kodu i łatwość konserwacji.</li>
              <li>API: do bezpiecznych połączeń z serwerami zdalnymi.</li>
              <li>Tailwind CSS: do szybkiego tworzenia interfejsu użytkownika za pomocą CSS.</li>
              <li>Material-UI: Aby zapewnić spójny i atrakcyjny wizualnie system projektowania.</li>
            </ul>
            <p className='text-2xl md:text-2xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent my-4'>Znajomość oprogramowania:</p>
            <ul className="list-disc list-inside">
              <li>Photoshop, Illustrator, InDesign</li>
              <li>After Effects, Davinci Resolve.</li>
              <li>DreamWeaver, Visual Studio Code.</li>
            </ul>
          </div>
          <div className='w-3/3 md:w-1/3 p-4 m-2 text-slate-100 text-sm md:text-sm lg:text-base backdrop-blur-sm bg-blue-500/50 rounded-lg shadow-lg h-32'>
            <h2 className='text-2xl md:text-4xl bg-gradient-to-tr from-blue-100 via-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-4'>Kontakt:</h2>
            <LinkText to="https://www.linkedin.com/in/pchuptys/" newTab={true}>www.linkedin.com/in/pchuptys/ <FaArrowUpRightFromSquare size={12} className='ml-2' /></LinkText>
          </div>
        </div>


      </div>

    </main>
  );
}
