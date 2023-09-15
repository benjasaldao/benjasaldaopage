import React from 'react';
import Image from 'next/image';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Container from '../common/Container';
import Contact from '../components/Contact';
import desarrollador from './../../public/desarrollador.png';
import development from './../../public/development.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />
      <Container>
        <Header />
        <section id="about-me" className="mt-10 md:flex items-center justify-evenly">
          <div className="flex flex-col items-center md:max-w-4/10">
            <h4 className="text-4xl font-bold mb-8">Sobre Mi</h4>
            <p className="text-gray-500 p-4">Mi nombre es Benjamin Saldaño y soy desarrollador web. Tengo 22 años y soy de Buenos Aires, Argentina.</p>
            <Link passHref href="/about-me">
              <button className="text-center w-32 hover:bg-indigo-600 py-1 rounded-md text-white bg-indigo-500 m-4">Leer mas</button>
            </Link>
          </div>
          <div className="flex items-center justify-center self-end">
            <Image className="" alt="desarrollador" src={desarrollador} />
          </div>
        </section>
        <section id="services" className="mt-10 md:flex items-center justify-evenly">
          <div className="flex items-center justify-center">
            <Image alt="desarrollador" src={development} />
          </div>
          <div className="flex flex-col items-center md:max-w-4/10">
            <h4 className="text-4xl font-bold mb-8">Mis trabajos</h4>
            <p className="text-gray-500 p-4">Algunos de los trabajos que realice por mi cuenta.</p>
            <Link passHref href="/works">
              <button className="text-center w-32 hover:bg-indigo-600 py-1 rounded-md text-white bg-indigo-500 m-4">Leer mas</button>
            </Link>
          </div>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Container>
    </div>
  );
}
