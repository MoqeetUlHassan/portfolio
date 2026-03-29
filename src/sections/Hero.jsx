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

const introText = "I build fast, reliable software from clean APIs to full-stack products. Whether you need a backend system, a web app, or a complete solution, you're in the right place. Take a look around.";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const [animationName, setAnimationName] = useState('salute');
  const [displayed, setDisplayed] = useState('');
  const introRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setAnimationName('idle'), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(introText.slice(0, i));
        if (i >= introText.length) clearInterval(interval);
      }, 22);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(start);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' },
    );
  }, []);

  const developerPosition = isSmall ? [1, -5.5, 2] : isMobile ? [1.5, -5.5, 2] : isTablet ? [0, -6, 3] : [2, -6, 4];
  const developerScale = isSmall ? 2.8 : isMobile ? 3.2 : isTablet ? 3.8 : 4.8;

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Moqeet Ul Hassan <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Full Stack Developer </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
              <Developer position={developerPosition} scale={developerScale} animationName={animationName} rotation={[0, -0.4, 0]} />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* Intro typewriter */}
      <div
        ref={introRef}
        className="absolute top-44 sm:top-48 left-0 z-10 opacity-0 max-w-[220px] sm:max-w-[260px] pl-4 sm:pl-6">
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-generalsans">
            {displayed}
            {displayed.length < introText.length && (
              <span className="inline-block w-0.5 h-3.5 bg-white/70 ml-0.5 align-middle animate-pulse" />
            )}
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
