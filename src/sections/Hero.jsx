import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera, Preload } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Developer from '../components/Developer.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const [animationName, setAnimationName] = useState('salute');
  const introRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setAnimationName('idle'), 3500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' },
    );
  }, []);

  const developerPosition = isSmall ? [-1.5, -5, 2] : isMobile ? [-2, -5, 2] : isTablet ? [-3.5, -5.5, 3] : [-5, -5.5, 4];
  const developerScale = isSmall ? 2.8 : isMobile ? 3.2 : isTablet ? 3.8 : 4.8;

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Moqeet Ul Hassan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Backend Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
              <Developer position={developerPosition} scale={developerScale} animationName={animationName} rotation={[0, 0.4, 0]} />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* Intro speech bubble */}
      <div
        ref={introRef}
        className="absolute top-48 sm:top-52 left-0 z-10 opacity-0 w-full max-w-xs sm:max-w-sm c-space">
        <div className="relative bg-transparent rounded-2xl px-6 py-4 text-center">
          {/* bubble tail */}
          <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-black-300" />

          <p className="text-white font-generalsans text-sm sm:text-base leading-relaxed">
            Hi! I&apos;m{' '}
            <span className="text-white font-semibold">Moqeet Ul Hassan</span> — a{' '}
            <span className="text-white font-semibold">Backend Developer</span>. Welcome to my
            portfolio where you can explore my experience, projects, and skills.
          </p>
        </div>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
