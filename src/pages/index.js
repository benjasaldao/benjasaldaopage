import React from 'react';
import Image from 'next/image';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Container from '../common/Container';
import desarrollador from './../../public/desarrollador.png';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Header className="sticky top-0" />
        <div id="#about-me" className="mt-10 md:flex items-center justify-between">
          <div className="flex flex-col items-center md:max-w-4/10">
            <h4 className="text-4xl font-bold mb-8">Sobre Mi</h4>
            <p className="text-gray-500 ">Hola de nuevo! Mi nombre es Benjamin Saldaño y soy desarrollador web. Tengo 22 años y soy de Buenos Aires, argentina.</p>
            <a href="/about-me" className="text-center w-32 hover:bg-indigo-600 py-1 rounded-md text-white bg-indigo-500 m-4">
              <button className="">Leer mas</button>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <Image className="" alt="desarrollador" src={desarrollador} />
          </div>
        </div>
      </Container>
    </>
  );
}
