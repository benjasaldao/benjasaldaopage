import React from 'react';
import animations from '../styles/animations.module.css';

const Hero = () => {
  return (
    <div className="border-b">
      <div className="text-xl h-screen flex flex-col items-center justify-evenly">
        <div className="m-8 sm:text-2xl md:text-4xl">
          <p className={animations.typing}>Hola! Soy Benja Saldaño</p>
          <p className={animations.typing2}>y soy desarrollador web</p>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center">
          <a href="/about-me" className="px-7 hover:bg-indigo-600 py-1 rounded-md text-white bg-indigo-500 m-4 md:mr-16">
            <button className="">Sobre mi</button>
          </a>
          <a href="/contact" className="px-7 py-1 hover:bg-indigo-100 rounded-md border-2 border-indigo-500 m-4 md:ml-16">
            <button className="">Contacto</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
